var request = {};

request.request = {
  buyer: {
    name: "Abraham",
    surname: "Heathcote",
    email: "dnetix@yopmail.com",
    document: "1040035000",
    documentType: "CC",
    mobile: 3006108300,
  },
  payment: {
    reference: "TEST_20200422_154154",
    description: "Sit reprehenderit et molestiae pariatur.",
    amount: {
      currency: "COP",
      total: 168000,
    },
  },
  expiration: "2020-04-23T15:41:54-05:00",
  ipAddress: "191.95.149.7",
  returnUrl: "https://dnetix.co/p2p/client",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
  paymentMethod: "",
};

request.query = 123456;

module.exports = request;
