import Koa from 'koa';
import Router from 'koa-router';

const koa = new Koa();
const router = new Router();

router
  .get('/', (ctx) => {
    ctx.body = {
      data: 'hello world!',
    };
  });

koa
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);
