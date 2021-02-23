import express from 'express';

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "hello" });
});

app.post("/", (req, res) => {
  return res.json({ message: "dados salvos com sucesso" });
});

app.listen(3333, () => console.log('server is run'));