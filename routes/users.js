var express = require('express');
var router = express.Router();

router.get('/:userIdx', (req, res) => {
  Comment.read(req.params.articleIdx,req.params.commentIdx).then(({
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
