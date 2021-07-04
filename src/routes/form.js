const KoaRouter = require("koa-router");
const Sequelize = require("sequelize")

const { getRecomendations } = require("../middlewares/form");

const router = new KoaRouter();

router.get("form.new", "/new", async (ctx) => {
  const comunas = [
    "Cerrillos",
    "Cerro Navia",
    "Conchalí",
    "El Bosque",
    "Estación Central",
    "Huechuraba",
    "Independencia",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "La Reina",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maipú",
    "Ñuñoa",
    "Pedro Aguirre Cerda",
    "Peñalolén",
    "Providencia",
    "Pudahuel",
    "Quilicura",
    "Quinta Normal",
    "Recoleta",
    "Renca",
    "San Joaquín",
    "San Miguel",
    "San Ramón",
    "Santiago",
    "Vitacura",
  ];
  await ctx.render("form/new", {
    comunas,
    sendFormPath: ctx.router.url("form.results"),
  });
});

router.post("form.results", "/show", async (ctx) => {
  const formData = ctx.request.body;
  const Op = Sequelize.Op;
  const serviceList = await ctx.orm.service.findAll({
    where: {
        spaceAvailable: {
            [Op.lte]: formData.squareMeters,
            }   
        },
    });
  const recomendations = getRecomendations(serviceList);
  // Se entregan las categorías recomendadas junto con el precio mínimo de los productos
  await ctx.render("form/show", {
    formData,
    recomendations,
    serviceList,
    serviceContactPath: 's',
  });
});

module.exports = router;
