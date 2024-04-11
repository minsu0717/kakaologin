const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/kakao", userController.getAuth);
userRouter.get("/kakao/finish", userController.getAccessToken);
userRouter.post("/kakao/signin", userController.signInKakao);
module.exports = { userRouter };
