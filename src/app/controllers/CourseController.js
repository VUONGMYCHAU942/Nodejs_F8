const Manager = require('../models/Manager');
const { mongooseToObject} = require ('../../util/mongoose');

class CourseController {

    //[GET] /search
    show(req, res, next) {
        //req.body.name
        // res.send('COURSE ////' + req.params.slug );
        Manager.findOne({slug: req.params.slug})
        .then((course) => 
         res.render('courses/show', {
            course: mongooseToObject(course),
          }),
        )
        .catch(next);
     }

     //[GET  lay du lieu] /search/create
     create(req, res, next) {
        res.render('courses/create')
     }
     
   


      //[POST  them du lieu] /search/store
      store(req, res, next) {
        //res.json(req.body);
        //const formData = req.body;
        const course = new Manager(req.body);
        course
        .save()
        .then(() => res.redirect('/me/stored/courses'))
        .catch(error => {

        });

    }

  
    //[GET  lay du lieu] /courses/:id/edit
    edit(req, res, next) {
      Manager.findById(req.params.id)
      .then(course => res.render('courses/edit',{
        course: mongooseToObject(course)
      }))
      .catch(next);
   
    };
  
 
  
   //[PUT] /courses/:id
    update(req, res, next) {
      Manager.updateOne({_id: req.params.id},req.body)
      .then(()=> res.redirect('/me/stored/courses'))
      .catch(next);
   }

   


   //[Delete]/courses/:id
   destroy(req, res, next){
    Manager.delete({_id: req.params.id})// đi xóa tí đợi chút
    .then(()=> res.redirect('back'))// xóa ok nhá
    .catch(next);//bắt lỗi nhá
   }

   //[Delete]/courses/:id/forceDestroy {{{--XÓA VĨNH VIỄN--}}}
   forceDestroy(req,res, next){
    Manager.deleteOne({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

  //[Patch]/courses/:id/restore {{{--KHÔI PHỤC--}}}
    restore(req,res,next){
    Manager.restore({_id: req.params.id})// 
    .then(()=> res.redirect('back'))
    .catch(next);
   }

   ///[POST]"/courses/handle-form-actions"
   handleFormActions(req, res, next){
    switch(req.body.action){
      case 'delete':
        Manager.delete({_id: {$in: req.body.courseIds }})// đi xóa tí đợi chút
        .then(()=> res.redirect('back'))// xóa ok nhá
        .catch(next);

       break;
    default:
      res.json({message: 'Action is invalid'});
    }
  }


 }
 
module.exports = new CourseController();
//const newController = require ('./NewController'); cais nayf connecting cai tren

//GET: giử yêu cầu lên server ,yêu cầu lên server trả lại dữ liệu cho khach hàng,
// POST: giử yêu cầu lên server lưu lại dữ liệu và tạo mới dữ liệu 
// PUT(sửa từng cái id mongodb) , PATCH(sửa hết database id mongodb) : chỉnh sửa dữ liệu 
