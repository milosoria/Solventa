function compare(a,b) {
    if (a.rating > b.rating && a.minReturn > b.minReturn && a.price > b.price || a.rating > b.rating) {
        return 1
    }
    if (a.rating < b.rating && a.minReturn < b.minReturn && a.price < b.price || a.rating < b.rating ){
        return -1
    }
    return 0
}
function getRecomendations(serviceList) {
    serviceList.sort((a,b) => compare(a,b));
    return serviceList
}

module.exports = {
    getRecomendations
}
