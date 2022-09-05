FROM node:lts-alpine

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npmmirror.com/" \
    && npm install -g pnpm \
    && pnpm i

EXPOSE 3000
CMD ["pnpm", "start"]