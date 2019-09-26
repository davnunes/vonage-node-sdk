module.exports = function(callback, config) {

  var Nexmo = require('../lib/Nexmo');

  var nexmo = new Nexmo({
      apiKey: config.API_KEY,
      apiSecret: config.API_SECRET
    },
    {debug: config.DEBUG}
  );

  nexmo.applications.get({page_size: 10}, callback);
};
