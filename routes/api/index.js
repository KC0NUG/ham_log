const router = require("express").Router();
const userRoutes = require("./users");
const contactRoutes = require("./contacts");

// User routes
router.use("/users", userRoutes);
router.use("/contacts",contactRoutes);

module.exports = router;
