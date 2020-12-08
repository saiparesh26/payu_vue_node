const { Router } = require('express');
const {
  register,
  login,
  loginRequired,
  auth,
  paymentgateway,
} = require('../controllers/userController');

const router = Router();

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/auth').get(loginRequired, auth);

router.route('/payment_gateway').post(paymentgateway);
module.exports = router;
