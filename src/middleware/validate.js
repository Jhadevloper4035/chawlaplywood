const { validationResult } = require("express-validator");
const AppError = require("../errors/AppError");

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const result = validationResult(req);

    if (!result.isEmpty()) {
      const errors = result.array().map((error) => ({
        field: error.path,
        message: error.msg,
      }));
      return next(new AppError("Validation failed", 422, errors));
    }

    return next();
  };
};

module.exports = validate;
