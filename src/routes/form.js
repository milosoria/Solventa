const KoaRouter = require('koa-router');
<<<<<<< HEAD
<<<<<<< HEAD
const { getRecomendations } = require('../../middlewares/form');
=======
const {getRecomendations} = require('../middlewares/form');
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c
=======
const {getRecomendations} = require('../middlewares/form');

>>>>>>> 7848b75781e6ef2c533671a4ad1e61c5cb80a5fd

const router = new KoaRouter();

router.get('form.new', '/new', async (ctx) =>{
    const comunas = ["Cerrillos", "Cerro Navia","Conchalí","El Bosque","Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina","Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul","Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura","Quinta Normal", "Recoleta", "Renca","San Joaquín", "San Miguel", "San Ramón", "Santiago", "Vitacura"]
    await ctx.render('form/new', {
        comunas,
        sendFormPath: ctx.router.url('form.results'),
    });
});

router.post('form.results', '/show', async (ctx) => {
<<<<<<< HEAD
<<<<<<< HEAD
    const categories = ctx.request.body;
    const productsList = await ctx.orm.product.findAll();
    const recomendations = getRecomendations(categories, productsList);
=======
    const formData = ctx.request.body;
    const serviceList = await ctx.orm.service.findAll();
    const recomendations = getRecomendations(formData, serviceList); 
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c
=======

    const formData = ctx.request.body;
    const serviceList = await ctx.orm.service.findAll();
    const recomendations = getRecomendations(serviceList); 
>>>>>>> 7848b75781e6ef2c533671a4ad1e61c5cb80a5fd
    // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
    await ctx.render('form/show', {
        formData,
        recomendations,
<<<<<<< HEAD
<<<<<<< HEAD
        productsList,
=======
        serviceList,
    })
>>>>>>> 8024d5594770d43f0be3b9b44b267f72461b2b1c
=======
        serviceList,
    })
>>>>>>> 7848b75781e6ef2c533671a4ad1e61c5cb80a5fd
    });

module.exports = router;
