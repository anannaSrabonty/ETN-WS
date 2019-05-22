'use strict';
require('dotenv').config();

const Koa = require('koa');

const koaBody = require('koa-body');
const cors = require('koa2-cors');
const variables = require('./variables');
const router = require('./routes');

const app = new Koa();

app.use(koaBody());
app.use(cors({ origin: '*' }));
app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(variables.appPort, () => {
  console.info(
    `API server listening on ${variables.host}:${variables.appPort}, in ${
      variables.env
    }`
  );
});

module.exports = server;
