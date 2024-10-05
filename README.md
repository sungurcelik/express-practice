# HTTP Server vs Express Farkları

1. Routing:

- HTTP Modülü: Yolları mamuel olarak kontrol ederiz. `req.url`'i koşullar içerisinde kontrol ederek endpoint tanımı yaparız.

## Express Backend Endpoints

- GET `/api/b1/cars` > Bütün araç verilerini alma
- POST `/api/v1/cars` > Yeni araç ekle

- GET `/api/v1/cars/ID` > ID'si bilinen araç verisini al
- PATCH `/api/v1/cars/ID` > ID'si bilinen araç verisini güncelle
- DELETE `/api/v1/cars/ID` > ID'si bilinen araç verisini sil
