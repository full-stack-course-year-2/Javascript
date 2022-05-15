const express = require("express");
const app = express();
const port = 5000;

const students = require("./data");

app.listen(port);

app.get("/", function (req, res) {
  res.send("Hello");
});

app.post("/post", (req, res) => {
  res.send({
    mesaj: "Post isteği çalıştı",
  });
});

app.get("/students", (req, res) => {
  res.send({
    mesaj: "get isteği çalıştı",
    data: students,
  });
});

app.get("/students/:id", (req, res) => {
  const result = students.find((student) => student.id == req.params.id);
  res.send({
    mesaj: "id li get isteği çalştı",
    data: result,
  });
});
