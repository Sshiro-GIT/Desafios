const { Router } = require("express");
const productsRoutes = require("./products/product.routes");
const cartRoutes = require("./cart/cart.routes");

const router = Router();

router.use("/products", productsRoutes);
router.use("/carts", cartRoutes);

module.exports = router;
