const Manager = require('../models/Manager');
const { mutipleMongooseToObject } = require ('../../util/mongoose');
class SiteController {
    //[GET] /

    index(req, res, next) {
      Manager.find({})
      .then(managers =>{
        //managers = managers.map(managers => managers.toObject()) p1
        res.render('home', {
          managers: mutipleMongooseToObject(managers)//p2 handlebar
        });
      })
      .catch(next);
       }
        //res.render('home');
    

    //[GET] /search
    search(req, res) {
      res.json(req.body)
    };
}

module.exports = new SiteController();
//const newController = require ('./NewController'); cais nayf connecting cai tren
