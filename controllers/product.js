const product = require("../models/product")

const getProducts = ((req, res) => {
    product.find().then((products) => {
        res.json(products);
      }).catch((err) => {
        res.json(err);
      });
})

const createProduct = ((req, res) => {
  var myData = new product(req.body);
  myData.save().then(() => {
          res.json("Kaydetme İşlemi Başarılı.");
      }).catch((err) => {
          res.json("Kaydetme İşleminde Hata Oluştu.");
      });
})


const updateProduct = ((req, res) => {
  var id = req.params.id;

  product.findByIdAndUpdate({"_id": id}, req.body).then((newProduct) => {
      res.json("Güncelleme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Güncelleme İşleminde Hata Oluştu.");
  });
})

const deleteProduct = ((req, res) => {
  var id = req.params.id;

  product.findByIdAndRemove(id).then(() => {
      res.json("Silme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Silme İşleminde Hata Oluştu.");
  });
})


const findProduct=  ((req, res) => {
  var id = req.params.id;

  product.findById(id).then((product) => {
    res.json(product);
  }).catch((err) => {
    res.json(err);
  });
})

module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    findProduct
}