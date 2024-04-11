// const { userDao } = require("../models/userDao");
const axios = require("axios");
// const jwt = require("jsonwebtoken");
const qs = require("querystring");

const redirectUri = "http://localhost:3000/auth/kakao/finish";
const clientId = process.env.KAKAO_KEY;

const getAuth = async () => {
  try {
    const authorizationUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
    return authorizationUrl;
  } catch (err) {
    console.log(err);
  }
};

const getAccessToken = async (code) => {
  try {
    const { data } = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        client_id: clientId,
        redirect_uri: redirectUri,
        code: code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );

    return data.access_token;
  } catch (err) {
    // throw new Error("카카오 API 호출 중 에러가 발생했습니다.");
    console.log(err);
  }
};

const signInKakao = async (kakaoToken) => {
  const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${kakaoToken}`,
    },
  });
  return result.data;
};
module.exports = { getAuth, getAccessToken, signInKakao };
