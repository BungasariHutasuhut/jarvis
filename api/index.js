import express from "express";
import {client} from "./database-pg.js";
const app = express();

//middleware
app.use((req, res, next) => {
  if (req.url === "/sari") {
    console.log("Sari");
  }
  console.log(req.url);
  next();
});

//route
app.get("/api/get", (req, res) => {
  res.send("Sari");
});

app.get("/api/mahasiswa", async (req, res) => {

  const a = await client.query("select * from mahasiswa");
  res.send(a);
});


app.listen(3000, () => {
  console.log("Berhasil !!");
});
