const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('form.show', '/new', async (ctx) => {
    await ctx.render('form/new', {
        sendFormPath: () => ctx.router.url('form.results'), 
        });
    });

router.get('form.results', '/show', async (ctx) => {
    const categories = ctx.params;
    let recomendations = [];
    const norte = ["I" ,"II" ,"III" ,"IV", "XV"];
    const centro = ["V" ,"VI" ,"VII" ,"VIII", "IX","XIII" ,"XIV","XVI"];
    const sur = ["X" ,"XI" ,"XII"];
    // Incluir paneles solares LED en la recomendación
    if ((centro.includes(categories.region) || norte.includes(categories.region)) && 
        (categories.homeType == "Casa") && 
        (categories.spaceAvailable == true) && 
        (categories.timeAtHome.includes("Mañana") && categories.timeAtHome.includes("Tarde")) &&
        (categories.propertyArea >= 400) && 
        (!categories.products.includes("Paneles Fotovoltaicos"))) {
        recomendations.push("Paneles Fotovoltaicos");
    };
    // Incluir ampolletas LED en la recomendación
    if ((categories.lightBulbQuantity >= 20) && 
        (categories.lightBulbType != "LED")) {
        recomendations.push("Ampolletas LED");
    };
    // Incluir refrigeradores en la recomendación
    if (!categories.products.includes("Refrigeradores")) {
        recomendations.push("Refrigeradores")
    };
    
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        categories,
        recomendations
    })
    });

module.exports = router;