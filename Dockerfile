FROM node:18-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN yarn

COPY . . 

RUN yarn build

FROM node:18-alpine as PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist /app/dist

COPY package.json .

COPY vite.config.ts .

RUN yarn add typescript

EXPOSE 8080

CMD ["yarn", "preview"]



