var express = require('express');
var router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/list', user_controller.user_list);
router.post('/create', user_controller.user_create);
router.get('/:id', user_controller.user_details);
router.put('/:id/update', user_controller.user_update);
router.delete('/:id/delete', user_controller.user_delete);

module.exports = router;