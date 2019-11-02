const statusCode = require('../module/utils/statusCode');
const responseMessage = require('../module/utils/responseMessage');
const authUtil = require('../module/utils/authUtil');

const db = require('../module/db/pool');
const productData = require('../module/data/ProductData');

const THIS_LOG = "product"

const product = {
    read: () => {
        return new Promise(async (resolve,reject) => {
            const getProductQuery = 'SELECT * FROM product';
            const getProductResult = await db.queryParam_None(getProductQuery);
            if(!getProductResult){
                resolve({
                    code: statusCode.NOT_FOUND,
                    json: authUtil.successFalse(
                        responseMessage.X_READ_FAIL(THIS_LOG)
                )});
            } 
            const productArr = [];
            getProductResult.forEach((rawProduct, index, result) => {
                productArr.push(productData(rawProduct));
            });
            resolve({
                code: statusCode.OK,
                json: authUtil.successTrue(
                    responseMessage.X_READ_SUCCESS(THIS_LOG),
                    productArr
            )});
        });
    },
}

module.exports = product;