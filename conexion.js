var placetopay = require("./lib/placetopay");

var placetopay = new placetopay({
  login: "6dd490faf9cb87a9862245da41170ff2",
  trankey: "024h1IlD",
  url: "https://test.placetopay.com/redirection",
});

json = {
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
  expiration: "2020-07-23T15:41:54-05:00",
  ipAddress: "191.95.149.7",
  returnUrl: "https://dnetix.co/p2p/client",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
  paymentMethod: "",
};

placetopay.query(123123).then((value) => {
  console.log(value);
});
