import { Context, Elysia } from "elysia";

const getUsers = (ctx: Context) => {
  // handle request & headers validations
  // ...
  console.log("Getting users!!!");
  console.log(ctx);
};

const getOneUser = () => {
  // handle request & headers validations
  // ...
  console.log("Getting one user!!!");
};

const createOneUser = () => {
  // handle request & headers validations
  // ...
  console.log("Creating one user!!!");
};

const updateOneUser = () => {
  // handle request & headers validations
  // ...
  console.log("Updating one user!!!");
};

export default (app: Elysia<"/users">) =>
  app
    .get("/", getUsers)
    .get("/:id", getOneUser)
    .post("/", createOneUser)
    .put("/:id", updateOneUser)
    .delete("/:id", updateOneUser);
