const Authentication = require("./Entities/authentication");
const RestCarrier = require("./Carrier/restCarrier");
const validate = require("./Validation/validate");
const PATH = "/api/session/";

module.exports = class Placetopay {
  constructor(params) {
    this.baseUrl = params.url;
    this.auth = new Authentication(params);
    this.rest = new RestCarrier();
  }

  async request(params) {
    const dataJson = Object.assign(this.auth.jsonSerialize(), params);

    const data = {
      body: dataJson,
      endpoint: this.baseUrl + PATH,
    };

    try {
      const response = await this.rest.call(data);

      return response;
    } catch (err) {
      return {
        status: {
          status: "102",
          message: "An error occurred",
          description: err,
        },
      };
    }
  }

  async query(params) {
    const newEndpoint = this.baseUrl;

    var data = {
      body: this.auth.jsonSerialize(),
      endpoint: newEndpoint + PATH + params,
    };

    try {
      await validate.validateRequestId(params);
      const response = await this.rest.call(data);

      return response;
    } catch (err) {
      return {
        status: {
          status: "FAILED",
          code: "102",
          message: "An error occurred",
          description: err,
        },
      };
    }
  }
};
