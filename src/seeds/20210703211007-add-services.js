module.exports = {
    up: async (queryInterface, Sequelize) => {
        const servicesArray = [];

        servicesArray.push({
            name: 'Raul Ugarte',
            rating: 4.5,
            installedCapacity: 2.5,
            price: 3000000,
            brand: 'Yi-Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJoO2QJsgl4y7XG9uMoaLwZPr0AnCpAIh4iJwwG4jL7V901IUjcJ_j7h0vvPOxaY8j0Xxz5s&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eMeMhQxRnU1-tDLJ1XeGs-m3kSAiW7QxiA&usqp=CAU',
            maxReturn: 12,
            minReturn: 8,
            maxYearly: 399772,
            minYearly: 255919,
            spaceAvailable: 25,
            gasReduction: 1.338,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Raul Ugarte',
            rating: 4.5,
            installedCapacity: 1.5,
            price: 2000000,
            brand: 'Kingdom Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6YDkl0g6p-bUliUhPn1CpRAhXQWxI8yDGHItr9g3Qr1spx1XPp2YWA1Rfm0A9xURbHoyjrc&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eMeMhQxRnU1-tDLJ1XeGs-m3kSAiW7QxiA&usqp=CAU',
            maxReturn: 14,
            minReturn: 9,
            maxYearly: 239863,
            minYearly: 153551,
            spaceAvailable: 15,
            gasReduction: 0.803,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Raul Ugarte',
            rating: 4.5,
            installedCapacity: 3.5,
            price: 4200000,
            brand: 'Yi-Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqQu101sCwwnoOd1ZStkf9gdCl8Nn_IKDelVR4wVXtv-OG87MxHkneRGDX1BtjHLpN06qePU&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eMeMhQxRnU1-tDLJ1XeGs-m3kSAiW7QxiA&usqp=CAU',
            maxReturn: 12,
            minReturn: 8,
            maxYearly: 559680,
            minYearly: 358286,
            spaceAvailable: 35,
            gasReduction: 1.873,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Solventa',
            rating: 4.2,
            installedCapacity: 2,
            price: 2700000,
            brand: 'Kingdom Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRz6oG4xnBEaNAJqyEr8NGljm3xw4-ZiYUPfp9Iq5FNVkPHmEXlAXu7ZOO_0-O5BUJYMUag0P&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2KSn1nG_2g9Mymr7SikGYnlLNBoNnsLbLw&usqp=CAU',
            maxReturn: 14,
            minReturn: 9,
            maxYearly: 319818,
            minYearly: 204735,
            spaceAvailable: 20,
            gasReduction: 1.070,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Sunny Solutions',
            rating: 4.6,
            installedCapacity: 1,
            price: 13000000,
            brand: 'Yi-Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRz6oG4xnBEaNAJqyEr8NGljm3xw4-ZiYUPfp9Iq5FNVkPHmEXlAXu7ZOO_0-O5BUJYMUag0P&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1-ljwCaiEz8w7IUk6vgkF6ilypqpUrSJGQ&usqp=CAU',
            maxReturn: 13,
            minReturn: 9,
            maxYearly: 159908,
            minYearly: 102367,
            spaceAvailable: 10,
            gasReduction: 0.535,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Sunny Solutions',
            rating: 4.6,
            installedCapacity: 2,
            price: 2500000,
            brand: 'Resun',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFg4styRqxpHhMYs81msMbR4MLyo3ZpupaB2RXaherXTA9c-GRUMHof1IeSwArq7k4of7kNvym&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1-ljwCaiEz8w7IUk6vgkF6ilypqpUrSJGQ&usqp=CAU',
            maxReturn: 13,
            minReturn: 8,
            maxYearly: 319818,
            minYearly: 204735,
            spaceAvailable: 20,
            gasReduction: 1.070,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Sunny Solutions',
            rating: 4.6,
            installedCapacity: 3,
            price: 3800000,
            brand: 'Resun',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqQu101sCwwnoOd1ZStkf9gdCl8Nn_IKDelVR4wVXtv-OG87MxHkneRGDX1BtjHLpN06qePU&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1-ljwCaiEz8w7IUk6vgkF6ilypqpUrSJGQ&usqp=CAU',
            maxReturn: 13,
            minReturn: 8,
            maxYearly: 477333,
            minYearly: 305571,
            spaceAvailable: 30,
            gasReduction: 1.598,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Sunny Solutions',
            rating: 4.6,
            installedCapacity: 40,
            price: 5000000,
            brand: 'Resun',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6YDkl0g6p-bUliUhPn1CpRAhXQWxI8yDGHItr9g3Qr1spx1XPp2YWA1Rfm0A9xURbHoyjrc&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1-ljwCaiEz8w7IUk6vgkF6ilypqpUrSJGQ&usqp=CAU',
            maxReturn: 13,
            minReturn: 8,
            maxYearly: 639635,
            minYearly: 409470,
            spaceAvailable: 40,
            gasReduction: 2.141,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        servicesArray.push({
            name: 'Sunny Solutions',
            rating: 4.6,
            installedCapacity: 5,
            price: 6000000,
            brand: 'Yi-Solar',
            photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJoO2QJsgl4y7XG9uMoaLwZPr0AnCpAIh4iJwwG4jL7V901IUjcJ_j7h0vvPOxaY8j0Xxz5s&usqp=CAc',
            providerPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1-ljwCaiEz8w7IUk6vgkF6ilypqpUrSJGQ&usqp=CAU',
            maxReturn: 12,
            minReturn: 8,
            maxYearly: 799543,
            minYearly: 511837,
            spaceAvailable: 50,
            gasReduction: 2.676,
            productLifetime: 20,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return queryInterface.bulkInsert('services', servicesArray);
    },

    down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', "null", {});
     */
    },
};