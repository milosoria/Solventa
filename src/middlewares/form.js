function getRecomendations(categories, productsList) {
    let recomendations = [];
    const norte = ["I" ,"II" ,"III" ,"IV", "XV"];
    const centro = ["V" ,"VI" ,"VII" ,"VIII", "IX","XIII" ,"XIV","XVI"];
    const sur = ["X" ,"XI" ,"XII"];
    // Incluir paneles solares LED en la recomendación
    if ((centro.includes(categories.region) || norte.includes(categories.region)) && 
        (categories.homeType == "Casa") && 
        categories.spaceAvailable && 
        (categories.morning == 'on' && categories.afternoon == 'on') &&
        (categories.propertyArea >= 400) && 
        (!categories.solarPanel)) {
        recomendations.push("Paneles Fotovoltaicos");
    };
    // Incluir ampolletas LED en la recomendación
    if ((categories.lightBulbQuantity >= 20) && categories.lightBulbType) {
        recomendations.push("Ampolletas LED");
    };
    // Incluir refrigeradores en la recomendación
    if (!categories.refrigerator) {
        recomendations.push("Refrigeradores")
    };
    return recomendations
}

module.exports = {
    getRecomendations
}
