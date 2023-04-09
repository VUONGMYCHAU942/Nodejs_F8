const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// newcontroller.index ra
router.get('/stored/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

router.get('/stored/roles', meController.storedRoles);
router.get('/trash/roles', meController.trashRoles);


router.get('/stored/departments', meController.storedDepartments);
router.get('/trash/departments', meController.trashDepartments);

module.exports = router;
