import * as http from 'http';
import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as Router from 'koa-router';
import * as Pug from 'koa-pug';
import * as session from 'koa-session';
import * as IO from 'socket.io';

const app = new Koa();
const router = new Router();
const server = http.createServer(app.callback());
const io = IO(server);

io.on('connection', () => {
  console.log('Socket user connected.');
});

new Pug({
  viewPath: './app/server/views',
  locals: { name: 'John', age: 5 },
  app
});

router
  .get('*', async (ctx) => {
    console.log(ctx.session);

    ctx.render('index', { name: 'Alex' });
  });

app
  .use(serve('./static'))
  .use(session({
    maxAge: 30 * 86400000,
    signed: false
  }, app))
  .use(router.routes());

server.listen(3000, () => console.log('Running on 3000...'));
