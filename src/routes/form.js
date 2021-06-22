const KoaRouter = require('koa-router');
const {getRecomendations} = require('../../middlewares/form');

const router = new KoaRouter();

router.get('form.new', '/new', async (ctx) => {
    await ctx.render('form/new', {
        sendFormPath: ctx.router.url('form.results') 
    });
});

router.post('form.results', '/show', async (ctx) => {
    const categories = ctx.request.body;
    const productsList = await ctx.orm.product.findAll();
    const recomendations = getRecomendations(categories, productsList); 
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        categories,
        recomendations,
        productsList,
    })
    });

module.exports = router;
