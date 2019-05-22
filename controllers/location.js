'use strict';
const { location } = require('../models');

exports.suggest = async ctx => {
  try {
    const { query } = ctx.request.query;
    const response = await location.getSuggestion(query);
    ctx.response.body = { message: 'Suggested locations', data: response };
  } catch (err) {
    console.log('err', err);
  }
};
