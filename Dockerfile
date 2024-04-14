
### Install stage
FROM node:18.16.0-slim as install

RUN apt-get update
RUN apt-get install -y git
ARG SSH_KEY
RUN mkdir /root/.ssh &&\
  echo "$SSH_KEY" > /root/.ssh/id_rsa &&\
  chmod 600 /root/.ssh/id_rsa

###################
# BUILD FOR LOCAL DEVELOPMENT
###################


FROM node:18.16.0-slim as development

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci
COPY --chown=node:node . .
USER node


###################
# BUILD FOR PRODUCTION
###################

FROM node:18.16.0-slim as build

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build:test
RUN npm ci --only=production && npm cache clean --force
USER node


###################
# PRODUCTION
###################


FROM node:18.16.0-slim as production
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/config ./config
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
ENV JWT_EXPIRES_IN=${JWT_EXPIRES_IN}
ENV JWT_SECRET=${JWT_SECRET}
ENV SCHEMA_SYNC=${SCHEMA_SYNC}
ENV NODE_ENV=${NODE_ENV}
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}
ENV DB_NAME=${DB_NAME}
ENV GATEWAY_PORT=${GATEWAY_PORT}
ENV TZ=Etc/UTC

EXPOSE ${MICROSERVICE_PORT}

CMD [ "node", "/dist/src/main.js" ]
