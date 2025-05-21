# ====================================================
# ＰＲＯＤＵＣＴＩＯＮ ＳＴＡＧＥ
# ====================================================

FROM cypress/base:24.0.0

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

ENV TZ=Asia/Dhaka

WORKDIR /app

COPY . .

RUN chmod +x /app/scripts/entrypoint.sh

RUN npm install

CMD ["/app/scripts/entrypoint.sh"]
