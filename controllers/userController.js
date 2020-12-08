const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jsSHA = require('jssha');
const axios = require('axios');
const CircularJson = require('circular-json');

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

    const user = await newUser.save();

    user.hashPassword = undefined;

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ msg: 'User already exists' });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: 'Authentication failed. No User found' });
    } else if (user) {
      if (!user.comparePassword(password, user.hashPassword)) {
        res
          .status(401)
          .json({ message: 'Authenitication failed. Wrong password' });
      } else {
        return res.json({
          token: jwt.sign(
            {
              email: user.email,
              username: user.username,
              _id: user._id,
            },
            process.env.SECRET
          ),
        });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

const loginRequired = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized user' });
  }
};

const auth = (req, res) => {
  res.status(200).json({ msg: 'Logged in' });
};

const paymentgateway = (req, res) => {
  const {
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    phone,
    template_id,
    sms_template_id,
    send_email_now,
    send_sms,
  } = req.body;
  const hashString =
    'ybDiOJ' +
    'create_invoice' +
    '|' +
    txnid +
    '|' +
    amount +
    '|' +
    productinfo +
    '|' +
    firstname +
    '|' +
    email +
    '|' +
    phone +
    '|' +
    template_id +
    '|' +
    sms_template_id +
    '|' +
    send_email_now +
    '|' +
    send_sms +
    '|' +
    '|||||||' +
    '|' +
    'so18bSmE';

  const sha = new jsSHA('SHA-512', 'TEXT');
  sha.update(hashString);

  // getting hashed value from sha module
  const hash = sha.getHash('HEX');

  let pay = {};
  pay.key = 'ybDiOJ';
  pay.hash = hash;
  pay.command = 'create_invoice';
  pay.var1 = {
    txnid,
    amount,
    productinfo,
    firstname,
    email,
    phone,
    template_id,
    sms_template_id,
    send_email_now,
    send_sms,
  };

  // console.log(pay);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  axios
    .post('https://test.payu.in/merchant/postservice.php?form=2', pay, {
      headers: headers,
    })
    .then((response) => {
      res.json({
        data: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  register,
  login,
  loginRequired,
  auth,
  paymentgateway,
};
