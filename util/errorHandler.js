module.exports = (err, location, res) => {
  // eslint-disable-next-line no-console
  console.error(`
    -------------------------
    Function Name: ${location}
    Error Name: ${err.name}
    Error Message: ${err.message}
    Error Stack: ${err.stack}
    -------------------------`);
  res.status(err.statusCode).json(err.message);
};
