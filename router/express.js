const express = require("express");
const router = express.Router();

// * 8) Express Router & 9) Require
router
  .route("/express")
  .get((req, res) => {
    res.send("Router Express /express , GET/READ Berhasil Terbaca");
  })
  .post((req, res) => {
    res.send("Router Express /express , POST/CREATE Berhasil Terbaca");
  });

module.exports = router;
