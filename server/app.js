import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import health from './routes/health';

const app = new Koa();
const router = new Router();

router.use(health.routes(), health.allowedMethods());
router.use('/ticket', stockRouter.routes(), stockRouter.allowedMethods());

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', (err) => {
  console.log('Server error', err);
});

export default app;
