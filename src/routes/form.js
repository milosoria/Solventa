const KoaRouter = require('koa-router');
<<<<<<< HEAD
const { getRecomendations } = require('../../middlewares/form');
=======
const {getRecomendations} = require('../middlewares/form');
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c

const router = new KoaRouter();

router.get('form.new', '/new', async (ctx) => {
    await ctx.render('form/new', {
        sendFormPath: ctx.router.url('form.results'),
    });
});

router.post('form.results', '/show', async (ctx) => {
<<<<<<< HEAD
    const categories = ctx.request.body;
    const productsList = await ctx.orm.product.findAll();
    const recomendations = getRecomendations(categories, productsList);
=======
    const formData = ctx.request.body;
    const serviceList = await ctx.orm.service.findAll();
    const recomendations = getRecomendations(formData, serviceList); 
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        formData,
        recomendations,
<<<<<<< HEAD
        productsList,
=======
        serviceList,
    })
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c
    });
});

module.exports
