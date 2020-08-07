const expect = require("chai").expect;
const nock = require("nock");
const Placetopay = require("../lib/placetopay");
const response = require("./Cases/response");
const request = require("./Cases/request");
const base_url = "https://test.placetopay.com/redirection";
const path_url = "/api/session/";

var placetopay = new Placetopay({
  login: "6dd490faf9cb87a9862245da41170ff2",
  trankey: "024h1IlD",
  url: "https://test.placetopay.com/redirection",
});

/**
 * A payment is generated correctly
 */
describe("Generate Payment Correct", () => {
  beforeEach(() => {
    nock(base_url).post(path_url).reply(200, response.requestOK);
  });

  it("Generate", () => {
    return placetopay.request(request.request).then((response) => {
      //expect an object back
      expect(typeof response).to.equal("object");

      //Test result of name, company and location for the response
      expect(response.status.status).to.equal("OK");
      expect(response.status.reason).to.equal("PC");
      expect(response.status.message).to.equal(
        "La petición se ha procesado correctamente"
      );
      expect(response.status.date).to.equal("2020-04-23T15:11:14-05:00");
      expect(response.requestId).to.equal(298449);
      expect(response.processUrl).to.equal(
        "https://test.placetopay.com/redirection/session/298449/058cb56df2cdaeaf10fd440adc13092f"
      );
    });
  });
});

/**
 * An incorrect payment is generated
 */
describe("Generate Payment Failed", () => {
  beforeEach(() => {
    nock(base_url).post(path_url).reply(200, response.requestFailed);
  });

  it("Generate", () => {
    return placetopay.request(request.request).then((response) => {
      expect(typeof response).to.equal("object");
      expect(response.status.status).to.equal("FAILED");
      expect(response.status.reason).to.equal(0);
      expect(response.status.message).to.equal(
        "El tiempo para realizar el pago es muy poco"
      );
      expect(response.status.date).to.equal("2020-04-23T15:12:46-05:00");
      
    });
  });
});

/**
 * Get a payment that exists
 */
describe("Get Payment exist", () => {
  beforeEach(() => {
    nock(base_url)
      .post(path_url + request.query)
      .reply(200, response.queryOK);
  });

  it("Get", () => {
    return placetopay.query(request.query).then((response) => {
      expect(typeof response).to.equal("object");
      expect(response.status.status).to.equal("PENDING");
      expect(response.status.reason).to.equal("PC");
      expect(response.status.message).to.equal(
        "La petición se encuentra activa"
      );
      expect(response.status.date).to.equal("2020-04-23T15:03:08-05:00");
      expect(response.requestId).to.equal(298446);
      expect(response.payment).to.equal(null);
      expect(response.subscription).to.equal(null);      
    });
  });
});

/**
 * Get a payment that doesn't exist
 */
describe("Get Payment doesn't exist", () => {
  beforeEach(() => {
    nock(base_url)
      .post(path_url + request.query)
      .reply(200, response.queryFailed);
  });

  it("Get", () => {
    return placetopay.query(request.query).then((response) => {
      expect(typeof response).to.equal("object");
      expect(response.status.status).to.equal("FAILED");
      expect(response.status.reason).to.equal(0);
      expect(response.status.message).to.equal("La sesión que busca no existe");
      expect(response.status.date).to.equal("2020-04-23T15:06:41-05:00");
    });
  });
});

/**
 * Generate Exception
 */
describe("Generate exception in query", () => {
  beforeEach(() => {
    nock(base_url)
      .post(path_url + request.query)
      .reply(200, response.queryFailed);
  });

  it("Get", () => {
    return placetopay.query([]).then((response) => {
      expect(typeof response).to.equal("object");
      expect(response.status.status).to.equal("FAILED");
      expect(response.status.code).to.equal("102");
      expect(response.status.message).to.equal("An error occurred");
      expect(response.status.description).to.equal(
        "The requestId must be an integer"
      );
    });
  });
});
