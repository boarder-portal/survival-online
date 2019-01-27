import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as Router from 'koa-router';
import * as Pug from 'koa-pug';

const app = new Koa();
const router = new Router();

new Pug({
  viewPath: './app/server/views',
  locals: { name: 'John', age: 5 },
  app
});

router
  .get('*', async (ctx) => {
    ctx.render('index', { name: 'Alex' });
  });

app
  .use(serve('./static'))
  .use(router.routes())
  .listen(3000, () => console.log('Running on 3000...'));
