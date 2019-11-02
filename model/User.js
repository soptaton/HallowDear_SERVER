const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/authUtil');

const db = require('../module/db/pool');
const userData = require('../module/data/userData');

const THIS_LOG = "user"

const user = {
    read: () => {
        return new Promise(async (resolve,reject) => {
            const getUserQuery = 'SELECT * FROM user';
            const getUserResult = await db.queryParam_None(getUserQuery);
            if(!getUserResult){
                resolve({
                    code: statusCode.NOT_FOUND,
                    json: authUtil.successFalse(
                        responseMessage.X_READ_FAIL(THIS_LOG)
                )});
            } 
            const userArr = [];
            getUserResult.forEach((rawUser, index, result) => {
                userArr.push(userData(rawUser));
            });
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(
                    responseMessage.X_READ_SUCCESS(THIS_LOG),
                    userArr
            )});
        });
    },
}

module.exports = user;
