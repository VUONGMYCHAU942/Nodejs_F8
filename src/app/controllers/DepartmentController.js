const Department = require('../models/Department');
const { mongooseToObject} = require ('../../util/mongoose');

class DepartmentController {

    //[GET] /search
    show(req, res, next) {
        //req.body.name
        // res.send('COURSE ////' + req.params.slug );
        Department.findOne({slug: req.params.slug})
        .then((department) => 
         res.render('departments/show', {
            department: mongooseToObject(department),
          }),
        )
        .catch(next);
     }
     
     //[GET  lay du lieu] /search/create
     create(req, res, next) {
        res.render('departments/create');
     }
     
   


      //[POST  them du lieu] /search/store
      store(req, res, next) {
        //res.json(req.body);
        //const formData = req.body;
        const department = new Department(req.body);
   
        department
        .save()
        .then(() => res.redirect('/me/stored/departments'))
        .catch(error => {
          console.log("ERRORRRR");
          console.log(error);

        });

    }

  
  
    //[GET  lay du lieu] /departments/:id/edit
    edit(req, res, next) {
      Department.findById(req.params.id)
      .then(department => res.render('departments/edit',{
        department: mongooseToObject(department)
      }))
      .catch(next);
   
    };
  
 
  
   //[PUT] /departments/:id
    update(req, res, next) {
      Department.updateOne({_id: req.params.id},req.body)
      .then(()=> res.redirect('/me/stored/departments'))
      .catch(next);
   }

   


   //[Delete]/departments/:id
   destroy(req, res, next){
    Department.delete({_id: req.params.id})// đi xóa tí đợi chút
    .then(()=> res.redirect('back'))// xóa ok nhá
    .catch(next);//bắt lỗi nhá
   }

   //[Delete]/departments/:id/forceDestroy {{{--XÓA VĨNH VIỄN--}}}
   forceDestroy(req,res, next){
    Department.deleteOne({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

  //[Patch]/departments/:id/restore {{{--KHÔI PHỤC--}}}
    restore(req,res,next){
    Department.restore({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

   ///[POST]"/departments/handle-form-actions"
   handleFormActions(req, res, next){
    switch(req.body.action){
      case 'delete':
        Department.delete({_id: {$in: req.body.departmentIds }})// đi xóa tí đợi chút
        .then(()=> res.redirect('back'))// xóa ok nhá
        .catch(next);

       break;
    default:
      res.json({message: 'Action is invalid'});
    }
  }

    }

    module.exports = new DepartmentController();
