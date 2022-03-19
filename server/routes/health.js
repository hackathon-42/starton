import Router from 'koa-router';

const health = new Router();

health.get(['/health', `/dev-assist/health`], (ctx) => {
  ctx.status = 200;
});

export default health;
