var responses = {};

responses.requestOK = {
  status: {
    status: "OK",
    reason: "PC",
    message: "La petición se ha procesado correctamente",
    date: "2020-04-23T15:11:14-05:00",
  },
  requestId: 298449,
  processUrl:
    "https://test.placetopay.com/redirection/session/298449/058cb56df2cdaeaf10fd440adc13092f",
};

responses.requestFailed = {
  status: {
    status: "FAILED",
    reason: 0,
    message: "El tiempo para realizar el pago es muy poco",
    date: "2020-04-23T15:12:46-05:00",
  },
};

responses.queryOK = {
  requestId: 298446,
  status: {
    status: "PENDING",
    reason: "PC",
    message: "La petición se encuentra activa",
    date: "2020-04-23T15:03:08-05:00",
  },
  request: {
    locale: "es_CO",
    buyer: {
      document: "1040035000",
      documentType: "CC",
      name: "Abraham",
      surname: "Heathcote",
      email: "dnetix@yopmail.com",
      mobile: "3006108300",
    },
    payment: {
      reference: "TEST_20200422_154154",
      description: "Sit reprehenderit et molestiae pariatur.",
      amount: [Object],
      allowPartial: false,
      subscribe: false,
    },
    returnUrl: "https://dnetix.co/p2p/client",
    ipAddress: "191.95.149.7",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
    expiration: "2020-04-23T15:41:54-05:00",
  },
  payment: null,
  subscription: null,
};

responses.queryFailed = {
  status: {
    status: "FAILED",
    reason: 0,
    message: "La sesión que busca no existe",
    date: "2020-04-23T15:06:41-05:00",
  },
};

module.exports = responses;
