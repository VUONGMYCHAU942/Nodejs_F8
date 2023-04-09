const Role = require('../models/Role');
const { mongooseToObject} = require ('../../util/mongoose');

class RoleController {

    //[GET] /search
    show(req, res, next) {
        //req.body.name
        // res.send('COURSE ////' + req.params.slug );
        Role.findOne({slug: req.params.slug})
        .then((role) => 
         res.render('roles/show', {
            role: mongooseToObject(role),
          }),
        )
        .catch(next);
     }
     
     //[GET  lay du lieu] /search/create
     create(req, res, next) {
        res.render('roles/create')
     }
     
   


      //[POST  them du lieu] /search/store
      store(req, res, next) {
        //res.json(req.body);
        //const formData = req.body;
        const role = new Role(req.body);
        role
        .save()
        .then(() => res.redirect('/me/stored/roles'))
        .catch(error => {

        });

    }

  
  
    //[GET  lay du lieu] /roles/:id/edit
    edit(req, res, next) {
      Role.findById(req.params.id)
      .then(role => res.render('roles/edit',{
        role: mongooseToObject(role)
      }))
      .catch(next);
   
    };
  
 
  
   //[PUT] /roles/:id
    update(req, res, next) {
      Role.updateOne({_id: req.params.id},req.body)
      .then(()=> res.redirect('/me/stored/roles'))
      .catch(next);
   }

   


   //[Delete]/roles/:id
   destroy(req, res, next){
    Role.delete({_id: req.params.id})// đi xóa tí đợi chút
    .then(()=> res.redirect('back'))// xóa ok nhá
    .catch(next);//bắt lỗi nhá
   }

   //[Delete]/roles/:id/forceDestroy {{{--XÓA VĨNH VIỄN--}}}
   forceDestroy(req,res, next){
    Role.deleteOne({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

  //[Patch]/roles/:id/restore {{{--KHÔI PHỤC--}}}
    restore(req,res,next){
    Role.restore({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

   ///[POST]"/roles/handle-form-actions"
   handleFormActions(req, res, next){
    switch(req.body.action){
      case 'delete':
        Role.delete({_id: {$in: req.body.roleIds }})// đi xóa tí đợi chút
        .then(()=> res.redirect('back'))// xóa ok nhá
        .catch(next);

       break;
    default:
      res.json({message: 'Action is invalid'});
    }
  }

    }

    module.exports = new RoleController();
