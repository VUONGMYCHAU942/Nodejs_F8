const express = require('express');
const router = express.Router();

const roleController = require('../app/controllers/RoleController');

// newcontroller.index ra

router.get('/create', roleController.create);

router.post('/store', roleController.store);

router.get('/:id/edit', roleController.edit);

router.post("/handle-form-actions" ,roleController.handleFormActions);

router.put('/:id', roleController.update);

router.patch('/:id/restore', roleController.restore);
router.delete('/:id', roleController.destroy);
router.delete('/:id/force', roleController.forceDestroy);

router.get('/:slug', roleController.show);


module.exports = router;
