import { Elysia } from "elysia";
import usersRoutes from "./usersRoutes";
// =>

const routes = (app: Elysia) => {
  app.group("/users", app => usersRoutes(app));
};

export default routes;
