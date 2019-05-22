const env = process.env.APP_ENV;
const appPort = process.env.APP_PORT;
const host = process.env.HOST || 'localhost';

module.exports = {
  appPort,
  env,
  host
};
