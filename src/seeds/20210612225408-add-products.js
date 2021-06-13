'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsArray = []
    // PANELES
    productsArray.push({
        category:"Paneles" ,
        price:97500 ,
        brandName:"Punto Solar",
        modelName: "Panel Solar 400W",
        description: "Panel solar de la empresa Punto Solar de 400 Watts de potencia",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Paneles",
        price: 150500,
        brandName: "Punto Solar",
        modelName: "Panel Solar 800W",
        description: "Panel solar de la empresa Punto Solar de 800 Watts de potencia",
createdAt: new Date(),
updatedAt: new Date(),

    })
    productsArray.push({
        category: "Paneles",
        price: 159990,
        brandName: "Yi-Solar",
        modelName: "Panel fotovoltaico 200W",
        description: "Panel fotovoltaico 200W monocristalino 1580mm x 808 mm",

        createdAt: new Date(),
        updatedAt: new Date(),
    })
    // LUMINARIA
    productsArray.push({
        category: "Luminaria",
        price: 27990,
        brandName:"Phillips",
        modelName: "Ampolleta eco twister E27 23W",
        description: "Luz cálida voltaje 220 V, con vida útil de 6000 hrs.",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Luminaria",
        price: 6670,
        brandName: "General Electric",
        modelName: "Ampolleta LED 220V 7W 35 gdo",
        description: "Luz cálida E-27 de 220V 7W",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Luminaria",
        price:9900,
        brandName: "Ozom" ,
        modelName: "Ampolleta led E27 60W",
        description: "Luz cálida-fría, E27 de 60W y 200V",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    // REFRIGERADORES 
    productsArray.push({
        category: "Refrigeradores",
        price: 299990,
        brandName: "KUBLI",
        modelName: "Refrigerador Neu No Frost 252L",
        description:"Kubli presenta Refrigerador Neu No Frost, de acero inoxidable. Cuenta con control de temperatura electrónico; volumen útil Freezer 54L.",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Refrigeradores",
        price: 259990,
        brandName: "MIDEA 260L",
        modelName: "Refrigerador Midea MRFI-2660S346RW",
        description: "Con el refrigerador Midea MRFI-2660S346RW Combi de 260 litros podrás disfrutar de tus alimentos, comidas y verduras por más tiempo gracias a su tecnología de frío directo que conserva la humedad.",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Refrigeradores",
        price: 409990,
        brandName: "MABE",
        modelName:"Refrigerador Mabe No Frost 290 Litros RMB302PXLRS0",
        description: "Amplia capacidad para guardar todo tipo de alimentos y recipientes. Posee Anaquel especial para botellas de 2 litros y de energía, y mejor conservación gracias a su sistema de enfriamiento R600.",
        createdAt: new Date(),
        updatedAt: new Date(),
    })

        return queryInterface.bulkInsert('products', productsArray);
    },
/*   down: async (queryInterface, Sequelize) => {
  } */
};
