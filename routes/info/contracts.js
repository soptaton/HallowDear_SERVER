const express = require('express');
const router = express.Router({mergeParams: true});

const statusCode = require('../../module/utils/statusCode');
const responseMessage = require('../../module/utils/responseMessage');
const authUtil = require('../../module/utils/authUtil');

const Contract = require('../../model/Contract');

router.get('/', (req, res) => {
    Contract.read().then(({
        code,
        json
    }) => {
        res.status(code).send(json);
    }).catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR, authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.post('/', (req, res) => {
    Contract.create(req.body).then(({
        code,
        json
    }) => {
        res.status(code).send(json);
    }).catch(err => {
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR, authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
    });
});

router.put('/', (req,res) => {
    const{
        name, userIdx, price, point,date, product
        } = req.body;
        
        Contract.update(name, userIdx, price, point,date, product).then(({
            code,
            json
        })=>{
            res.status(code).send(json);
        }).catch(err =>{
            console.log(err);
            res.status(statusCode.INTERNAL_SERVER_ERROR,authUtil.successFalse(responseMessage.INTERNAL_SERVER_ERROR));
        });
})


module.exports = router;