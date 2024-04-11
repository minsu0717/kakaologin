const userService = require("../services/userService");

const getAuth = async (req, res) => {
  auth = await userService.getAuth();
  res.redirect(auth);
};

const getAccessToken = async (req, res, next) => {
  try {
    const code = req.query.code;
    console.log("----------------code :", code, "-------------------");
    const token = await userService.getAccessToken(code);
    console.log("----------------toekn :", token, "-------------------");
    res.json(token);
  } catch (err) {
    console.log("a", err);
  }
};

const signInKakao = async (req, res) => {
  const kakaoToken = req.headers.authorization;
  result = await userService.signInKakao(kakaoToken);
  res.status(200).json(result);
};

module.exports = { getAuth, getAccessToken, signInKakao };
