const { StatusCodes } = require("http-status-codes");
const AppValidation = require("./error-handler");


class ValidateError extends AppValidation {
  constructor(error) {
    let erroName = error.name;
    let explanation = [];
    error.errors.forEach((err) => {
      explanation.push(err);
    });
    super(
      erroName,
      "Not able to validate the data sent in the request",
      explanation,
      StatusCodes.BAD_REQUEST
    );
  }
}

module.exports = ValidateError;