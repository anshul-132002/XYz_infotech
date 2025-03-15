export const validate = (schema) => async (req, res, next) => {
  try {
    const parsebody = await schema.parseAsync(req.body);
    req.body = parsebody;
    next();
  } catch (err) {
    const status = 401;
    const message = err.errors[0].message;
    const error = {
      status,
      message,
    };
    console.log(error)
    next(error);
  }
};
