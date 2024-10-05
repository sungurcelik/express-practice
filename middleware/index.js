exports.logger = (req, res, next) => {
  console.log("İstek Geldi", "Method: " + req.method + " URL:" + req.url);

  req.body
  next();
};
