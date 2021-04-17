
var express = require('express');
const Cv_controller = require('../controller/Cv.controller');
const user_controller = require('../controller/user.controller');



var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});
router.get('/login', function (req, res, next) {
  res.render('login', { page: 'login', menuId: 'login' });
});

router.get('/login',user_controller.fetchloginform);
router.post('/loginchk',user_controller.loginchk); //when username and password is submitted for auth

router.get('/logout',user_controller.logout); //here this route will destroy all sessions.
router.get('/dashboard',user_controller.redirectLogin,user_controller.dashboard);



router.get('/mainView', Cv_controller.Cv_view);
router.post('/educreate', Cv_controller.educreate);
router.get('/savedView', Cv_controller.Cv_resume);
router.post('/delete/:id', Cv_controller.Cv_delete);
router.get('/updateView/:id', Cv_controller.updateView);
router.post('/update/:id', Cv_controller.Cv_update);
module.exports = router;
