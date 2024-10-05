const express = require("express");
const {
  getAllCars,
  createCar,
  getCar,
  updateCar,
  deleteCar,
} = require("./controllers");
const { logger } = require("./middleware");
// isteğin parametresi ile gelen id geçerli mi kontrolü(middleware)
const idControl = require("./middleware/idControl");

//kurulkum

const app = express();
const PORT = 3000;

// Middleware
app.use(logger);

//istekleri body/header/param bölümlerini
app.use(express.json());

// routelar
app.route("/api/v1/cars").get(getAllCars).post(createCar);

// app.use(idControl);
app
  .route("/api/v1/cars/:id")
  .get(idControl, getCar)
  .patch(idControl, updateCar)
  .delete(idControl, deleteCar);

// dinelencek port belirle

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinleme başladı`);
});
