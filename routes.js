'use strict';
const Router = require('koa-router');

const router = new Router();
// const variables = require('./variables');
const { suggest } = require('./controllers/location');

router.get('/', ctx => {
  ctx.response.body = { data: {}, message: 'Request Accepted' };
});

router.get('/location/suggestion', suggest);

module.exports = router;
