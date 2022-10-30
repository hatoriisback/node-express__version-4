const express = require("express");
const router = express.Router();

// * 14) Controllers
const userController = require("../controllers/data-users");

router
  // * 10) READ DATA
  .route("/data-users")
  .get(userController.index)

  // * 11) CREATE NEW DATA
  .post(userController.store);

// * 12) UPDATE SPECIFIC DATA
router.put("/data-users/:id", userController.update);

// * 13) DELETE SPECIFIC DATA
router.delete("/data-users/:userId", userController.delete);

module.exports = router;
