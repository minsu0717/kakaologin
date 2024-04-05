const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// userRouter.post("/kakao/signin", userController.signInWithKakao);
userRouter.get("/kakao/finish", userController.getAccessToken);
userRouter.get("/kakao", userController.getAuth);
module.exports = { userRouter };
