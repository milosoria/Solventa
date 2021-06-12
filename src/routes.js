const KoaRouter = require('koa-router');

const hello = require('./routes/hello');
const index = require('./routes/index');
const form = require('./routes/form')

const router = new KoaRouter();

router.use('/', index.routes());
router.use('/hello', hello.routes());
router.use('/form', form.routes());

module.exports = router;
