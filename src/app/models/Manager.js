const mongoose = require('mongoose');
const  slug = require('mongoose-slug-updater');
const  mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Manager = new Schema({

   Name:{type: String, required:true }, 
   Email:{type: String, maxLength: 600}, 
   Age:{type: String, maxLength: 255}, 
   Address:{type: String, maxLength: 255}, 
   Action:{type: String, maxLength: 255}, 
   Tag:{type: String, maxLength: 255}, 


    slug: { type: String, slug:'Email', unique:true },
},{
  timestamps: true,
  deadline_1:{type: String, maxLength: 255}, 
  deadline_2:{type: String, maxLength: 255}, 

});
// Add plugins
mongoose.plugin(slug);
Manager.plugin(mongooseDelete, {
  deletedAt : true, // thời gian xóa
  overrideMethods: 'all', 
});


module.exports =  mongoose.model('Manager', Manager);