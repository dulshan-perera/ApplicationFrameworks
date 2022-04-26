import Koa from "koa";
import bodyParser from "koa-bodyparser";
import HomeRoutes from "./Routes/home.router.js";
import PostRoutes from "./routes/post.routes.js"

const app = new Koa();
app.use(bodyParser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());
//  app.use('/p', PostRoutes);
// app.use(ctx =>{
//     ctx.body = "Hello World";
// });


app.listen(3000);
console.log("Appplication is running on Port 3000");