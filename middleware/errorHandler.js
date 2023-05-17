const { logEvents } = require("./logger");
const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name} \t ${err.message} \t ${req.method} \t ${req.url} \t ${req.headers.origin}`,
    "errorLog.log"
  );
  console.log(err.stack);
  const status = res.statusCode ? res.statusCode : 500; // server Error
  res.send(status);
  res.json({ message: err.message, name: err.name });
};
module.exports = { errorHandler };
