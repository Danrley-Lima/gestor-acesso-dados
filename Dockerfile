FROM node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install -g typescript
RUN npm install

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

CMD [ "npm", "run", "start"]
# CMD ["npm", "run", "dev"]
# CMD ["npm", "run", "prod"]
