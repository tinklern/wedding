FROM node:13.6.0-alpine3.10
WORKDIR /app
COPY ./package.json /app/package.json
RUN npm install
COPY . /app
RUN ./node_modules/.bin/next build
EXPOSE 3000
CMD ./node_modules/.bin/next start
