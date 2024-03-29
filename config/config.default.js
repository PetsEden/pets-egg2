'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1507723705199_1459';

  // add your config here
  config.middleware = [ 'errorHandler' ];
  config.errorHandler = {
    match: '/api',
  };
  return config;
};
