const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.content = '<h1>hello wprld</h1>';
});

app.listen(8002);
console.log('the app is running ata port 8002');