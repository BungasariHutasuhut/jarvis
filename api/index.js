import express from "express";

const app = express();

//middleware =>funtion yang me
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

app.listen(3000, () => {
  console.log("Berhasil !!");
});
