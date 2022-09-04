const customer = require("../models/customer")

const getCustomers = ((req, res) => {
  customer.find().then((customers) => {
        res.json(customers);
      }).catch((err) => {
        res.json(err);
      });
})

const createCustomer = ((req, res) => {
  var myData = new customer(req.body);
  myData.save().then(() => {
          res.json("Kaydetme İşlemi Başarılı.");
      }).catch((err) => {
          res.json("Kaydetme İşleminde Hata Oluştu.");
      });
})


const updateCustomer = ((req, res) => {
  var id = req.params.id;

  customer.findByIdAndUpdate({"_id": id}, req.body).then((newCustomer) => {
      res.json("Güncelleme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Güncelleme İşleminde Hata Oluştu.");
  });
})

const deleteCustomer = ((req, res) => {
  var id = req.params.id;

  customer.findByIdAndRemove(id).then(() => {
      res.json("Silme İşlemi Başarılı.");
  }).catch((err) => {
      res.json("Silme İşleminde Hata Oluştu.");
  });
})


const findCustomer=  ((req, res) => {
  var id = req.params.id;

  customer.findById(id).then((customer) => {
    res.json(customer);
  }).catch((err) => {
    res.json(err);
  });
})

const loginCustomer=  ((req, res) => {
  var email = req.query.email;
  var password = req.query.password;

  customer.findOne({ mail: email }).then((customer) => {
    if(customer.password == password)
        res.json(customer);
    else
        res.json("kullanıcı bulunamadı !");
  }).catch((err) => {
    res.json(err);
  });
})

module.exports = {
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomer,
    loginCustomer
}