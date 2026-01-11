# MRA-IMS-Cypress Setup

## Download Command in Ubuntu

### 1. Install NodeJS
Run the following commands to install Node.js on Ubuntu:

Node.js is an open-source, cross-platform JavaScript runtime environment that enables you to run JavaScript code outside of a web browser. It is built on the V8 JavaScript engine and is widely used for developing server-side applications.
Currently, I am using Node.js `v18.19.1`. To install or update to the latest version of Node.js, open your preferred terminal and run the following commands:


```sh
sudo apt update -y
sudo apt install nodejs -y
```

#### Please node js Version Check
```sh
node -v
```

### 2. Install NPM

npm (Node Package Manager) is a tool that is bundled with Node.js. It simplifies the management of JavaScript libraries and packages within your projects, allowing you to easily install, share, and update dependencies.
The current version I am using is npm `v9.2.0`. To install or update to the latest version, open your preferred terminal and run the following commands:

```sh
sudo apt install npm -y
```

#### Please npm Version Check 
```sh
npm -v
```
### 3. Initialize the Project
```sh
npm init -y
```
### 4. Install cypress

Cypress is a powerful JavaScript-based end-to-end testing framework designed for testing web applications. It provides a comprehensive testing environment that enables you to write, execute, and debug tests in real-time. By running directly in the browser, Cypress offers faster test execution and a more intuitive debugging experience compared to other testing frameworks.
The current version I am using is Cypress `v14.5.4`. To install or update to the latest version, open your preferred terminal and run the following command:

```sh
npm install cypress --save-dev
```
#### Please Cypress Version Check 
```sh
npx cypress -v
```

### 5. Verify Cypress Installation
```sh
npx cypress verify
```

#### Open Cypress
```sh
npx cypress open
```

### 6. If Your Project Run Isn’t Displaying.
```sh
npx cypress run
```
### 7. Only one file run command open browser chrome.

```sh
npx cypress run --spec cypress/e2e/mra-admin/01-login/login.cy.js --browser chrome --headed --reporter mochawesome
```
### 8. Only one file run command without open browser chrome.

```sh
npx cypress run --spec cypress/e2e/mra-admin/mfi-admin/mis/01-department/department.cy.js --headless --reporter mochawesome
```

### 9. Install Mochawesome Report

Mochawesome is a popular reporting tool for tests executed with JavaScript testing frameworks, particularly Mocha. It generates detailed and visually appealing reports, simplifying the process for developers and teams to analyze and debug test results. Mochawesome is commonly used in conjunction with testing frameworks like Mocha, Cypress, and others to create informative and well-structured HTML reports.
The current version I am using is Mochawesome `v7.1.3`. To install or update to the latest version, open your preferred terminal and run the following commands:

```sh
npm install mochawesome --save-dev
```
### 10. Please Mochawesome Version Check

```sh
npm show mochawesome version
```

### 11. Generate Mocha Reports  All E2E file.
```sh
npx cypress run --e2e --headed --reporter mochawesome
```
### 12. Run env dev
```sh
npm run dev
```
### 13. Run env auto
```sh
npm run auto
```

### 14. Video Record
#### if you want to record video, change `cypress.config.js` file
> { "e2e" : { "video" : `true` }}

#### if you want to record multiple video, change `cypress.config.js` file
> { "e2e" : { "trashAssetsBeforeRuns" : `false` }}


### 15. Install VLC video media player app in ubuntu.

VLC Media Player is a free, open-source, and highly versatile multimedia player that supports nearly all audio and video formats, including DVDs, CDs, and network streams. It's widely used due to its speed, lightweight design, and powerful playback capabilities. VLC also offers advanced features such as subtitle synchronization, media conversion, and screen recording.

To install VLC Media Player on Ubuntu, open your terminal and run the following command:


```sh
sudo apt install vlc
```

## Working Files And Folders:

1. **e2e:** This is the folder where all your tests should be written.
2. **Fixtures:** Contains JSON files with constant values to be used across tests.
3. **PageObjects:** This folder follows the Page Object Model (POM) design pattern for organizing tests.
4. **Support > Commands.js:** Contains base settings and custom commands used across tests.
5. **cypress.conf.js:** This file contains configurations related to the test runs.
