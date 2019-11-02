const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/authUtil');

const db = require('../module/db/pool');
const contractData = require('../module/data/contractData');

const THIS_LOG = "contract"

const contract = {
    read: () => {
        return new Promise(async (resolve,reject) => {
            const getContractQuery = 'SELECT * FROM contract';
            const getContractResult = await db.queryParam_None(getContractQuery);
            if(!getContractResult){
                resolve({
                    code: statusCode.NOT_FOUND,
                    json: authUtil.successFalse(
                        responseMessage.X_READ_FAIL(THIS_LOG)
                )});
            } 
            const contractArr = [];
            getContractResult.forEach((rawContract, index, result) => {
                contractArr.push(contractData(rawContract));
            });
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(
                    responseMessage.X_READ_SUCCESS(THIS_LOG),
                    contractArr
            )});
        });
    },
    create: ({
        name,
        userIdx,
        price,
        givePerson,
        date,
        productIdx
    }) => {
        return new Promise(async(resolve,reject) => {
            if(!name ||!userIdx ||!price || !givePerson || !date || !productIdx){
                resolve({
                    code: statusCode.NOT_FOUND,
                    json: authUtil.successFalse(
                        responseMessage.NULL_VALUE
                    )
                });
            } 
            const postContractQuery = 'INSERT INTO contract(name, userIdx, price, givePerson, date, productIdx) VALUES (?, ?, ?, ?, ?, ?)';
            const postContractResult = await db.queryParam_Parse(postContractQuery,[name, userIdx, price, givePerson, date, productIdx]);
            if(!postContractResult){
                resolve({
                    code: statusCode.NOT_FOUND,
                    json: authUtil.successFalse(
                        responseMessage.X_CREATE_FAIL(THIS_LOG)
                )});
            }
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(
                    responseMessage.X_CREATE_SUCCESS(THIS_LOG)
            )});
        });
    },
}

module.exports = contract;