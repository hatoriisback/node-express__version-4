// * 14) Controllers
let dataUsers = [
  {
    id: "1",
    username: "username 1",
    position: "position 1",
  },
  {
    id: "2",
    username: "username 2",
    position: "position 2",
  },
  {
    id: "3",
    username: "username 3",
    position: "position 3",
  },
];

module.exports = {
  index: (req, res) => {
    if (dataUsers.length > 0) {
      res.json({
        status: true,
        message: "Data Berhasil di READ",
        data: dataUsers,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "DATA KOSONG",
      });
    }
  },

  store: (req, res) => {
    console.log(req.body);
    dataUsers.push(req.body);
    res.send({
      status: true,
      message: "Data Berhasil di CREATE",
      data: dataUsers,
      method: req.method,
      url: req.url,
    });
  },

  update: (req, res) => {
    const id = req.params.id;
    console.log(id);
    dataUsers.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.username = req.body.username;
        user.position = req.body.position;

        return user;
      }
    });
    res.json({
      status: true,
      message: `Data ID: ${id} Berhasil di EDIT`,
      data: dataUsers,
      method: req.method,
      url: req.url,
    });
  },

  delete: (req, res) => {
    const id = req.params.userId;
    console.log(id);
    let users = dataUsers.filter((user) => user.id != id);
    if (users) {
      res.send({
        status: true,
        message: `Data ID: ${id} Berhasil di DELETE`,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.send({
        status: false,
        message: `Data ${user.id} Gagal di DELETE / Tidak Ditemukan`,
        data: users,
        method: req.method,
        url: req.url,
      });
    }
  },
};
