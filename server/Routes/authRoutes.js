import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// if you do routing in seperate file, then router object is needed.
// router object
const router = express.Router();

//routing1

//REGSTER ||   METHOD=POST
router.post("/register", registerController);

//LOGIN || METHOD=POST
router.post("/login", loginController);

// Forgot Password || POST  , new end point
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController); // we added a middleware. first it will GET the request, then validate using middleware and then after respond (<res>) will be send.
//above has two middleware, first one (requireSignIn) is checking token and other one (isAdmin) is checking admin

// protected user route-auth. now, we need to check authenticated user or for Dashboard
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected Admin route-auth, here, two condition will check. there is signin available or isAdmin available or not
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//order
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

//s order status update
router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController);

export default router;
