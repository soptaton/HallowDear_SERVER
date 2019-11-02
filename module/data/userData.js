
module.exports = 
(rawUserData) => {
    userData = {
        "userIdx": rawUserData.userIdx,
        "name": rawUserData.name,
        "password": rawUserData.password,
        "address": rawUserData.address,
        "givePrice": rawUserData.givePrice,
        "phone": rawUserData.phone
    }
    return userData;
}
