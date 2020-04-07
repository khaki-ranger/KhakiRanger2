'use strict';
require('dotenv').config();

const configVars = {
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_SECRET
  },
  heroku: {
    url: process.env.IP_ADDRESS
  },
};

module.exports = configVars;
