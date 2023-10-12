import { Context, Elysia } from "elysia";

import userService from "../models/users/user.service";
import { IPaginationParams } from "../common/interfaces/common";

const defaultPagination: IPaginationParams = {
  pageSize: 10,
  after: 0,
};

const list = (ctx: Context) => {
  // handle request & headers validations
  // ...
  console.log("Getting users!!!");
  return userService.list(defaultPagination);
};

const getOne = () => {
  // handle request & headers validations
  // ...
  console.log("Getting one user!!!");
};

const create = () => {
  // handle request & headers validations
  // ...
  console.log("Creating one user!!!");
};

const update = () => {
  // handle request & headers validations
  // ...
  console.log("Updating one user!!!");
};

const remove = () => {
  // handle request & headers validations
  // ...
  console.log("Updating one user!!!");
};

export default (app: Elysia<"/users">) =>
  app
    .get("/", list)
    .get("/:id", getOne)
    .post("/", create)
    .put("/:id", update)
    .delete("/:id", remove);
