const express = require("express");
const app = express();

// * IMPORT ANOTHER PAGE FILE
const expressRouter = require("./router/express");
const dataUsersRouter = require("./router/data-users");

// * Import / Call body-parser
let bodyParser = require("body-parser");

// * Load parser for POST a data
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// * 15) How to Write Middleware
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  // req.time = new Date();
  next();
};

// * 15) Load Middleware
app.use(myLogger);

// * 16) Load Middleware
app.set("view engine", "ejs");

// * Load parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// // * 1) Hello World
// app.get("/", (req, res) => {
//   res.send("Hello World");
//   console.log("Route / , Berhasil Terbaca");
// });

// // * 2) Basic Routing
// app.get("/about", (req, res) => {
//   res.send("About");
//   console.log("Route /about , Berhasil Terbaca");
// });

// * 3) Membuat Routing
app.get("/home", (req, res) => {
  // const data = {
  //   message: "HOME",
  //   date: req.time.toString(),
  // };

  console.log("Route /home , Berhasil Terbaca");
  res.render("index");
});

app.get("/users", (req, res) => {
  res.send("GET/READ User");
  console.log("Route /users -- GET/READ , Berhasil Terbaca");
});

app.post("/users", (req, res) => {
  res.send("POST/CREATE User");
  console.log("Route /users -- POST/CREATE , Berhasil Terbaca");
});

app.put("/users", (req, res) => {
  res.send("PUT/UPDATE User");
  console.log("Route /users -- PUT/UPDATE , Berhasil Terbaca");
});

app.delete("/users", (req, res) => {
  res.send("DELETE User");
  console.log("Route /users -- DELETE , Berhasil Terbaca");
});

// // * 4) Route Parameter
// app.put("/users/:id", (req, res) => {
//   const id = req.params;
//   res.send(id);
//   console.log("Route /users/:id -- PUT/UPDATE , Berhasil Terbaca");
// });

// app.delete("/users/:userId", (req, res) => {
//   const id = req.params.userId;
//   res.send(id);
//   console.log("Route /users/:userId -- DELETE , Berhasil Terbaca");
// });

// // * 5) Response JSON
// // => Testing 1
// app.get("/", (req, res) => {
//   console.log("Route / , Berhasil Terbaca");
//   res.send('<h3>Hi World</h3>');
// });

// // => Testing 2
// app.get("/", (req, res) => {
//   const kelas = {
//     id: 1,
//     nama: "Jackson",
//   };

//   console.log("Route / , Berhasil Terbaca");
//   res.json(kelas);
// });

// // * 6) Redirect
// app.get("/about", (req, res) => {
//   res.redirect("/home");
//   console.log("Route /about , Berhasil Terbaca untuk Redirect");
// });

// * 7) Route Groups
app
  .route("/route-group/users")
  .get((req, res) => {
    res.send("GET/READ -- USERS has been Sended");
  })
  .post((req, res) => {
    res.send("POST/CREATE -- USERS has been Sended");
  });

// * 8) Load Express Router & 9) Require
app.use(expressRouter);

// * 10 - 13) Load Read, Create, Update, Delete Data
app.use(dataUsersRouter);

// todo ==> LISTEN SERVER PORT 5000
app.listen(5000, () => {
  console.log("Server 5000 is Running");
});
