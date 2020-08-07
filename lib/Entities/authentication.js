const crypto = require("crypto");
const base64 = require("base-64");

module.exports = class Authentication {
  constructor(params) {
    this.login = params.login;
    this.secretkey = params.trankey;
    this.endpoint = params.url;
    this.fecha = new Date();
    this.nonce = makeid();
  }

  getLogin() {
    return this.login;
  }

  getNonce() {
    return base64.encode(this.nonce);
  }

  getTrankey() {
    return crypto
      .createHash("sha1")
      .update(this.nonce + this.fecha.toISOString() + this.secretkey)
      .digest("base64");
  }

  getSeed() {
    return this.fecha.toISOString();
  }

  jsonSerialize() {
    return {
      auth: {
        login: this.getLogin(),
        tranKey: this.getTrankey(),
        nonce: this.getNonce(),
        seed: this.getSeed(),
      },
    };
  }
};

function makeid() {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 32; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
