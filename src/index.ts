import { Elysia } from "elysia";
import routes from "./routes";
const PORT = process.env.PORT || 5000;
const app = new Elysia();
routes(app);

app.listen(PORT);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port} ...`
);
