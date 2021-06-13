'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const productsArray = []
    // Paneles Fotovoltaicos
    productsArray.push({
        category:"Paneles Fotovoltaicos" ,
        price:97500 ,
        brandName:"Punto Solar",
        modelName: "Panel Solar 400W",
        description: "Panel solar de la empresa Punto Solar de 400 Watts de potencia",
        url: "https://puntosolar.cl/wp-content/uploads/2017/09/Panel_SolarFotovoltaico_Csun-Polycristalino_260Wp_600.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Paneles Fotovoltaicos",
        price: 150500,
        brandName: "Punto Solar",
        modelName: "Panel Solar 800W",
        description: "Panel solar de la empresa Punto Solar de 800 Watts de potencia",
        url: "https://puntosolar.cl/wp-content/uploads/2020/07/395.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),

    })
    productsArray.push({
        category: "Paneles Fotovoltaicos",
        price: 159990,
        brandName: "Yi-Solar",
        modelName: "Panel fotovoltaico 200W",
        description: "Panel fotovoltaico 200W monocristalino 1580mm x 808 mm",
        url: "https://globalelectricsolar.com.pe/wp-content/uploads/2018/02/yisolar-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    // Ampolletas LED
    productsArray.push({
        category: "Ampolletas LED",
        price: 27990,
        brandName:"Phillips",
        modelName: "Ampolleta eco twister E27 23W",
        description: "Luz cálida voltaje 220 V, con vida útil de 6000 hrs.",
        url: "https://sodimac.scene7.com/is/image/SodimacCL/5572967",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Ampolletas LED",
        price: 6670,
        brandName: "General Electric",
        modelName: "Ampolleta LED 220V 7W 35 gdo",
        description: "Luz cálida E-27 de 220V 7W",
        url: "https://www.guzman.cl/20639-large_default/ampolleta-led-energy-220v-par-20-7w-l-calida-e-27-35gdo-gelectric.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Ampolletas LED",
        price:9900,
        brandName: "Ozom" ,
        modelName: "Ampolleta led E27 60W",
        description: "Luz cálida-fría, E27 de 60W y 200V",
        url: "https://ripleycl.imgix.net/https%3A%2F%2Fwww.ledstudio.cl%2Fimagenes%2FN10100960.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=43434d5e986ea88a43c4ffae15e97947",
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
        url: "https://www.abcdin.cl/wcsstore/ABCDIN/images/refrigeradores-no-frost/1144913F13.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Refrigeradores",
        price: 259990,
        brandName: "MIDEA 260L",
        modelName: "Refrigerador Midea MRFI-2660S346RW",
        description: "Con el refrigerador Midea MRFI-2660S346RW Combi de 260 litros podrás disfrutar de tus alimentos, comidas y verduras por más tiempo gracias a su tecnología de frío directo que conserva la humedad.",
        url: "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dw03416bb5/images/imagenes-productos/701/812357-0000-001.jpg?sw=1480&sh=2000&sm=fit",
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    productsArray.push({
        category: "Refrigeradores",
        price: 409990,
        brandName: "MABE",
        modelName:"Refrigerador Mabe No Frost 290 Litros RMB302PXLRS0",
        description: "Amplia capacidad para guardar todo tipo de alimentos y recipientes. Posee Anaquel especial para botellas de 2 litros y de energía, y mejor conservación gracias a su sistema de enfriamiento R600.",
        url: "https://www.paris.cl/dw/image/v2/BCHW_PRD/on/demandware.static/-/Sites-cencosud-master-catalog/default/dwfdff1794/images/imagenes-productos/701/459361-0000-001.jpg?sw=1480&sh=2000&sm=fit",
        createdAt: new Date(),
        updatedAt: new Date(),
    })

        return queryInterface.bulkInsert('products', productsArray);
    },
    
    down: async (queryInterface, Sequelize) => {
    }
};
