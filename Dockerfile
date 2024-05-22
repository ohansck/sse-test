ARG NODE_VERSION=node:alpine3.17
ARG ENV=production

FROM $NODE_VERSION

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm install

COPY --chown=node:node server.js .

USER node

RUN ls

EXPOSE 8000

CMD ["node", "server.js"]