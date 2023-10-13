import { Elysia } from "elysia";
import routes from "./routes";
import initDB from "./configs/db";
import configs from "./configs";

const app = new Elysia();
routes(app);
initDB();

app.listen(configs.port);

console.log(
  `🦊 App is running at http://${app.server?.hostname}:${app.server?.port} ...`
);
