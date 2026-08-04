# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Cypress end-to-end test suite for the IMS2 (Microfinance Institution management system) web application. Tests cover four user roles, each with their own module tree: MFI Admin, Branch Manager, MRA Admin, and Field Officer. There is no application source code here — this repo only contains the test automation and its Docker/reporting pipeline.

## Commands

```sh
npm run open              # open Cypress interactive runner (uses whatever env is currently loaded)
npm run dev                # headless run against the dev environment (cypress/env/.env.dev)
npm run auto                # headless run against the auto/staging environment (cypress/env/.env.auto)
npm run cy:report          # intended to generate/send the mochawesome summary report, but references scripts/send-report.js, which does not exist in this repo (reporting is actually done by scripts/generate_summary.py, invoked from scripts/entrypoint.sh in Docker)
npm run cy:test            # run + report combined — also broken, references an undefined "cy:run" script; use `dev`/`auto` directly instead
```

Run a single spec (pick whichever env var matches the target environment):

```sh
cross-env CYPRESS_ENV=dev npx cypress run --spec cypress/e2e/01-mfi-admin/01-mis/02-department/department.cy.js --browser chrome --headed --reporter mochawesome
```

Each `.cy.js` file also carries the exact `npx cypress run --spec ...` invocation as a comment at the top — copy it directly rather than guessing paths.

There is no lint or unit test setup in this repo; correctness is verified by running the Cypress specs themselves.

## Environment configuration

- `cypress.config.js` picks `cypress/env/.env.${CYPRESS_ENV}` (default `auto`) via `dotenv`, and exposes `CYPRESS_BASE_URL` / `CYPRESS_TEST_DATA` as `Cypress.env("BASE_URL")` / `Cypress.env("TEST_DATA")`.
- Two environments exist: `dev` (`.env.dev` → `cypress/fixtures/dev.json`) and `auto` (`.env.auto` → `cypress/fixtures/auto.json`). Adding a new environment means adding both a `cypress/env/.env.<name>` file and a matching `cypress/fixtures/<name>.json`, then running with `CYPRESS_ENV=<name>`.
- `testIsolation: false` and `watchForFileChanges: false` are set deliberately — specs within a describe block share session/page state (see Architecture below), so do not "fix" this to the Cypress default.
- Geolocation is spoofed to a fixed Dhaka lat/long on every login via the Chrome DevTools protocol (`Emulation.setGeolocationOverride`) because the app requires location permission.

## Architecture

**Page Object Model, one folder per feature.** Every module lives in `cypress/e2e/<role>/<sub-module>/<NN-feature-name>/`, containing exactly two files:
- `<feature>.cy.js` — the `describe`/`it` spec, numbered test cases (e.g. `02.01`, `02.02`) that read as a script of sequential UI actions on one page.
- `<feature>.po.js` — a page-object class exporting a singleton instance (e.g. `export const create_department = new DepartmentCreation();`) whose methods are called directly from the spec (`create_department.createDepartment()`).

Specs are **not independent test cases** — because `testIsolation` is off, each `it()` continues from the DOM/session state left by the previous one within a `describe` block (e.g., open a create form in one test, submit it in the next, edit in the one after). Do not reorder or read `it()` blocks in isolation; read the whole file top to bottom to understand a flow.

**Role hierarchy in `cypress/e2e/`:**
- `01-mfi-admin/` — sub-split into `01-mis`, `02-ais`, `03-report-ais` modules
- `02-branch-manager/` — same `01-mis` / `02-ais` / `03-report-ais` split
- `03-mra-admin/` — `01-mfi`, `02-mra`
- `04-field-officer/` — `01-mis`, `02-ais`
- `workflow.cy.js` — a separate top-level end-to-end scenario that imports page objects across multiple feature folders and chains them into one long workflow (e.g. cancel samity → authorize → day-end process MIS → switch to AIS → day-end process AIS → switch back → day forward), rather than one module in isolation.

`cypress.config.js`'s `specPattern` is an explicit allowlist of the four role globs plus `workflow.cy.js` — a new top-level spec file elsewhere in `cypress/e2e/` will not run unless added there.

**Shared support code (`cypress/support/`):**
- `commands.js` — custom commands, most importantly:
  - `cy.imsId(id)` — selects `[data-ims-id='...']` (the app's primary test-hook attribute)
  - `cy.formController(name)` — selects `[formcontrolname='...']` (Angular reactive form fields)
  - `cy.formArrayController(array, index, control)` — indexed form-array field lookup
  - `cy.login(url, username, password)` / role-specific variants (`loginAsMraAdmin`, `loginAsMfiAdmin`, `loginAsBranchManager`, `loginAsFieldOfficer`) — handle geolocation override + credential entry
  - `cy.changeLanguage`, `cy.switchModule`, `cy.selectMenu`/`selectMenu1`, `cy.logout`
- `constants/selectors.js` — `GRID` object centralizing `data-ims-id` values by category (`BUTTONS`, `CREATE`, `INPUTS`, `TOGGLES`, `DROPDOWN`, `TABLE`); page objects should reference these rather than hardcoding id strings.
- `constants/messages.js` — expected UI copy/log messages referenced from `cy.log(...)` calls in page objects for readability, not assertions.
- `constants/constants.js`, `constants/urls.js` — small shared enums/paths.

**Fixtures (`cypress/fixtures/`):** `auto.json` / `dev.json` hold per-environment credentials and form test data, keyed by role (`mfiAdmin`, etc.) and feature (`createDepartmentFrom`, ...). Page objects pull the active file via `cy.fixture(this.test_data)` where `test_data = Cypress.env("TEST_DATA")`. Image fixtures (`employeePhoto1.jpg`, `nidPront1.jpg`, `nidBack1.jpg`, `tinDocImg1.jpg`) are used with `cypress-file-upload` for document upload flows.

## Docker / CI reporting pipeline

- `Dockerfile` builds on `cypress/base` with Python added for report post-processing; `scripts/entrypoint.sh` runs `npx cypress run --headless` followed by `scripts/generate_summary.py`.
- `generate_summary.py` reads the latest mochawesome JSON from `cypress/reports/`, appends a row to a cumulative `summary.html` dashboard, copies the per-run HTML report into `/app/nginx/reports/`, and emails the summary via SMTP. Treat the SMTP credentials at the top of this file as sensitive — do not print or copy them into commits, PRs, or logs.
