const express = require('express');
const router = express.Router();

const departmentController = require('../app/controllers/DepartmentController');

// newcontroller.index ra

router.get('/create', departmentController.create);

router.post('/store', departmentController.store);

router.get('/:id/edit', departmentController.edit);

router.post("/handle-form-actions" ,departmentController.handleFormActions);

router.put('/:id', departmentController.update);

router.patch('/:id/restore', departmentController.restore);
router.delete('/:id', departmentController.destroy);
router.delete('/:id/force', departmentController.forceDestroy);

router.get('/:slug', departmentController.show);


module.exports = router;
