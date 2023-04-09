const mongoose = require('mongoose');
const  slug = require('mongoose-slug-updater');
const  mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Department = new Schema({
  Tag:{type: String, maxLength: 255}, 


   slug: { type: String, slug:'Tag', unique:true },
},{
 timestamps: true,
});
// Add plugins
mongoose.plugin(slug);
Department.plugin(mongooseDelete, {
 deletedAt : true, // thời gian xóa
 overrideMethods: 'all', 
});
module.exports =  mongoose.model('Department', Department);