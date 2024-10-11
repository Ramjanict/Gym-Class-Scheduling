const express = require("express");
const signup = require("../controller/signup");
const login = require("../controller/login");
const logout = require("../controller/logout");
const authToken = require("../middleware/authToken");
const traineeDetails = require("../controller/traineeDetails");
const router = express.Router();



//Trainee Panel
router.post("/signup",signup)
router.post("/login",login)
router.get("/logout",logout)
router.get("/user-details", authToken, traineeDetails);

//admin panel
// router.get("/all-users", authToken, allusers);
// router.post("/update-user", authToken, updateUser);
// router.post("/delete-admin-product", authToken, deleteAdminProduct);

//product API


//user add to cart API
// router.post("/addtocart", authToken, addToCart);
// router.get("/countAddToCart", authToken, countAddToCart);
// router.get("/view-card-product", authToken, addToCartViewProduct);
// router.post("/update-cart-product", authToken, updateAddToCartProduct);
// router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;
