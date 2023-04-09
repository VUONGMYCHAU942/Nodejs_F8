const Manager = require('../models/Manager');
const { mutipleMongooseToObject } = require ('../../util/mongoose');
const Department = require('../models/Department');
const Role = require('../models/Role');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Manager.find({})//{{#each courses}}
         .then(courses => res.render('me/stored-courses',{
           courses:mutipleMongooseToObject(courses)//{{#each courses}}
        }))
       .catch(next);
      
    };
    
    storedRoles(req, res, next) {
       Role.find({})//{{#each courses}}
       .then(roles => res.render('me/stored-roles',{
         roles:mutipleMongooseToObject(roles)//{{#each roles}}
      }))
     .catch(next);
    
  };
  
  storedDepartments(req, res, next) {
   Department.find({})//{{#each courses}}
    .then(departments => res.render('me/stored-departments',{
      departments:mutipleMongooseToObject(departments)//{{#each roles}}
   }))
  .catch(next);
 
};



  


    //[GET] /me/stored/courses
    trashCourses(req, res, next){
    Manager.findDeleted({})//{{#each courses}}
         .then(courses => res.render('me/trash-courses',{
           courses:mutipleMongooseToObject(courses)//{{#each courses}}
        }))
       .catch(next);
    };

    trashRoles(req, res, next){
      Role.findDeleted({})//{{#each courses}}
           .then(roles => res.render('me/trash-roles',{
             roles:mutipleMongooseToObject(roles)//{{#each roles}}
          }))
         .catch(next);
      };
      
    trashDepartments(req, res, next){
      Department.findDeleted({})//{{#each courses}}
           .then(departments => res.render('me/trash-departments',{
             departments:mutipleMongooseToObject(departments)//{{#each departments}}
          }))
         .catch(next);
      };
    
    
  
    
}

module.exports = new MeController();
//const newController = require ('./NewController'); cais nayf connecting cai tren
