const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('form.new', '/new', async (ctx) => {
    await ctx.render('form/new', {
        sendFormPath: ctx.router.url('form.results') 
    });
});

router.get('form.results', '/show', async (ctx) => {
    const productsList = await ctx.orm.product.findAll();
    const categories = ctx.request.body;
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
    
    console.log(recomendations);
    
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        categories,
        recomendations,
        productsList,
    })
    });

module.exports = router;