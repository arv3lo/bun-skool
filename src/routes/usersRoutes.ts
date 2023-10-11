import { Elysia } from "elysia";

const getUsers = () => {
  // ...
  console.log("Getting users!!!");
};

const getOneUser = () => {
  // ...
  console.log("Getting one user!!!");
};

const createOneUser = () => {
  // ...
  console.log("Creating one user!!!");
};

const updateOneUser = () => {
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
