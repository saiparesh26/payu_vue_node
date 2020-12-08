const express = require('express');
const cors = require('cors');
const { config } = require('dotenv');
const jwt = require('jsonwebtoken');

// Load env variables
config({ path: './config/config.env' });

const userRoutes = require('./routes/userRoutes');

const app = express();

// Use Express Parser
app.use(express.json());

app.use(cors());
// JWT Setup
app.use((req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'JWT'
  ) {
    jwt.verify(
      req.headers.authorization.split(' ')[1],
      process.env.SECRET,
      (err, decode) => {
        if (err) {
          req.user = undefined;
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

// Mount Routes
app.use('/', userRoutes);

// Static folder
app.use(express.static(__dirname + '/public/'));

module.exports = app;
