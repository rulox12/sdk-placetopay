const request = require("request");

module.exports = class RestCarrier {
  constructor(autentication) {
    this.autentication = autentication;
  }

  call(params) {
    if (params) {
      return new Promise(function (resolve) {
        var headersOpt = {
          "content-type": "application/json",
        };

        var options = {
          uri: params.endpoint,
          method: "POST",
          form: params.body,
          headers: headersOpt,
          json: true,
        };

        request(options, function (err, httpResponse, bodyResponse) {
          try {
            if (bodyResponse) {
              resolve(bodyResponse);
            }
            resolve({
              status: {
                status: "FAILED",
                message: "An error occurred",
                description: err,
              },
            });
          } catch (error) {
            resolve({
              status: {
                status: "ERROR",
                message: "An error occurred",
                description: error,
              },
            });
          }
        });
      });
    }
  }
};
