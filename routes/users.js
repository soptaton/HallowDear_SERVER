const express = require('express');
const router = express.Router({mergeParams: true});

const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/authUtil');

const User = require('../model/User');

router.get('/', (req, res) => {
  User.read().then(({
      code,
      json
  }) => {
      res.status(code).send(json);
  }).catch(err => {
      console.log(err);
      res.status(statusCode.INTERNAL_SERVER_ERROR, authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
  });
});

module.exports = router;
