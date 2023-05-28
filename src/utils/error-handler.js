const { StatusCodes } = require("http-status-codes");

class AppValidation extends Error {
  constructor(
    name = "App Error",
    message = "Something went wrong",
    explanation = "Something went wrong",
    StatusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.name = name;
    this.message = message;
    this.explanation = explanation;
    this.StatusCode = StatusCode;
  }
}

module.exports=AppValidation;