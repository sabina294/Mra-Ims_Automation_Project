# ====================================================
# ＰＲＯＤＵＣＴＩＯＮ ＳＴＡＧＥ
# ====================================================

FROM cypress/base:24.0.0

RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ARG NODE_ENV
ENV CYPRESS_ENV=${NODE_ENV}

ENV TZ=Asia/Dhaka

WORKDIR /app

RUN mkdir -p /app/nginx

COPY . .

RUN chmod +x /app/scripts/entrypoint.sh

RUN pip3 install beautifulsoup4 premailer --break-system-packages

RUN npm install

CMD ["/app/scripts/entrypoint.sh"]
