
module.exports = 
(rawContractData) => {
    contractData = {
        "contractIdx": rawContractData.contractIdx,
        "name": rawContractData.name,
        "userIdx": rawContractData.userIdx,
        "price": rawContractData.price,
        "givePerson": rawContractData.givePerson,
        "date": rawContractData.date,
        "productIdx": rawContractData.productIdx
    }
    return contractData;
}
