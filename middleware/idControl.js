const fs = require("fs");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

module.exports = (req, res, next) => {
  //isteğe param olarak gelen id'li elemanı diziden al
  const found = cars.find((car) => car.id === req.params.id);
  console.log("MIDDLEWARE BURADAYIM", found)
  // eğer eleman bulunamadıysa
  if (!found)
    return res
      .status(404)
      .json({ message: "Gönderilen id'ye sahip bir araç bulunamadı" });

      // sonraki adımda found'a erişebilmek için isteğe ekle
      req.car = found
      
  //id geçerliyse
  next();
};
