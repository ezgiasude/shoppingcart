const cart = require("../models/cart")

const getCarts = ((req, res) => {
  cart.find().then((model) => {
        res.json(model);
      }).catch((err) => {
        res.json(err);
      });
})

const addToCart = ((req, res) => {
  var myData = new cart(req.body);
  myData.totalAmount= myData.price * myData.quantity;

  myData.save().then(() => {
          res.json("Kaydetme İşlemi Başarılı.");
      }).catch((err) => {
          res.json("Kaydetme İşleminde Hata Oluştu.");
      });
})


const updateCart = ((req, res) => {
  var id = req.params.id;

  cart.findByIdAndUpdate({"_id": id}, req.body).then((model) => {
      res.json("Güncelleme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Güncelleme İşleminde Hata Oluştu.");
  });
})

const deleteCart = ((req, res) => {
  var id = req.params.id;

  cart.findByIdAndRemove(id).then(() => {
      res.json("Silme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Silme İşleminde Hata Oluştu.");
  });
})


const findCart=  ((req, res) => {
  var id = req.params.id;

  cart.find({"customerId" : id}).then((model) => {
    res.json(model);
  }).catch((err) => {
    res.json(err);
  });
})

module.exports = {
  getCarts,
  addToCart,
  updateCart,
  deleteCart,
  findCart
}