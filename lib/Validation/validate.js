var validateCtrl = {};

validateCtrl.validateRequestId = (options) => {
  if (!Number.isInteger(options)) {
    throw "The requestId must be an integer";
  }
  return options;
};
module.exports = validateCtrl;
