function Authenticator(req, res, next) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    res
      .status(401)
      .json({ message: "Authorization Missing...add anything for this time" });
  } else {
    // TODO Implement proper validation
    let user = { id: "42kj4h3214412jkn" };
    req.headers["user"] = user;
    next();
  }
}

module.exports = { Authenticator };
