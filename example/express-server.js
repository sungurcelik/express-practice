const express = require("express");

const app = express();
const port = 3000;

// middleware (cors hatalarını çözmek için doğru headerlar gönderir)
app.use(cors());

// "/" adresine gelen GET isteklerine cevap

app.get("/", (req, res) => {
  res.json({ message: "SERVERDAN MERHABALAR" });
});

//hangi porttan glen istekler dinlenecek
app.listen(port, () => {
  console.log("server DİNLENMEYE BAŞLADI");
});

app.post("/new", (req, res) => {
  res.status(201).json({ message: "Ürün oluşturuldu" });
});
