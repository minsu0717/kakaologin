const userService = require("../services/userService");

const getAuth = async (req, res) => {
  auth = await userService.getAuth();
  res.redirect(auth);
};

const getAccessToken = async (req, res) => {
  const code = req.query.code;
  const token = await userService.getAccessToken(code);
  res.status(200).json(token);
};

module.exports = { getAuth, getAccessToken };
