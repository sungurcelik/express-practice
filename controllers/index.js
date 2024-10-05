const fs = require("fs");
const crypto = require("crypto");
const write = require("../utils/write.js");

// araba verilerini al
let cars = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/cars.json`, "utf-8")
);

// Bütün Araçları alır
exports.getAllCars = (req, res) => {
  res.status(200).json({
    message: "Araç verileri alındı",
    results: cars.length,
    cars,
  });
};

// Yeni Araç Ekler
exports.createCar = (req, res) => {
  //Araç verisine id ekle
  const newCar = { ...req.body, id: crypto.randomUUID() };

  // yeni aracı diziye ekle
  cars.push(newCar);

  //json dosyasını güncelle
  write(cars);

  res.status(201).json({
    message: "Yeni Araç Oluşturuldu",
    car: newCar,
  });
};

// Bir aracı al
exports.getCar = (req, res) => {
  // middlewareda id kontrolü yapıldı
  res.status(200).json({
    message: "Araç Bulundu",
    car: req.car,
  });
};

// Bir aracı güncelle
exports.deleteCar = (req, res) => {
  // idsi gelen aracı diziden kaldır
  cars = cars.filter((car) => car.id !== req.params.id);

  // json dosyasını güncelle
  write(cars);
  console.log("DELETE METHODU");

  //client'a cevap gönder

  res.status(204).json({
    message: "Araç Silindi ",
  });
};

// Bir aracı güncelle
exports.updateCar = (req, res) => {
  //isteğin body kısmındaki güncellenecek değerleri al
  const updatedData = req.body;

  // aracın güncel değerlerine sahip yeni bir nesne oluştur
  const updatedCar = { ...req.car, ...updatedData };

  // güncellenecek elemanın sırasını bul
  const index = cars.findIndex((car) => car.id === updatedCar.id);

  //dizideki eski aracın yerine yeni aracı koy
  cars.splice(index, 1, updatedCar);

  // json dosyasını güncelle
  write(cars);

  res.status(200).json({
    message: "Araç Güncellendi ",
    car: updatedCar,
  });
};
