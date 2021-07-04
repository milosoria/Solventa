const KoaRouter = require('koa-router');

const index = require('./routes/index');
const form = require('./routes/form');

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/form', form.routes());

module.exports = router;
