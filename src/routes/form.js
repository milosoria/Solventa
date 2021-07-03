const KoaRouter = require('koa-router');
const {getRecomendations} = require('../middlewares/form');

const router = new KoaRouter();

router.get('form.new', '/new', async (ctx) => {
    await ctx.render('form/new', {
        sendFormPath: ctx.router.url('form.results') 
    });
});

router.post('form.results', '/show', async (ctx) => {
    const formData = ctx.request.body;
    const serviceList = await ctx.orm.service.findAll();
    const recomendations = getRecomendations(formData, serviceList); 
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        formData,
        recomendations,
        serviceList,
    })
    });

module.exports = router;
