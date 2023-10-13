import { EServerErrors } from "../../common/enums/errors";
import { IPaginationParams } from "../../common/interfaces/common";
import { CustomError } from "../../common/utils/customError";
import { TUser } from "./user.model";
import userRepository from "./user.repository";

const list = async (params: IPaginationParams) => {
  // call getUsers from userRepository
  const users = await userRepository.getUsers(params);
  // if error return Error (not found || invalid)
  if (!users) throw new CustomError(EServerErrors.NOT_FOUND);
  // else return userList
  return users;
};

const getOne = (userID: string) => {
  // call getOne from userRepository
  // ...
  // if error return Error (not found || invalid)
  // ...
  // else return user
  // ...
};

const createOne = (user: TUser) => {
  // call createOneUser from userRepository
  // ...
  // create user creation history
  // ...
  // if error return Error (not found || invalid)
  // ...
  // else return newUser
  // ...
};

const updateOne = (userID: string, user: TUser) => {
  // call updateOneUser from userRepository
  // ...
  // create user update history
  // ...
  // if error return Error (not found || invalid)
  // ...
  // else return updatedUser
  // ...
};

const deleteOne = (userID: string) => {
  // call deleteOneUser from userRepository
  // ...
  // create user delete history
  // ...
  // if error return Error (not found || invalid)
  // ...
  // else return deletedUser
  // ...
};

const find = (searchText: string) => {
  // call findUser from userRepository
  // ...
  // create user search history
  // ...
  // if error return Error (not found || invalid)
  // ...
  // else return search results
  // ...
};

export default { list, getOne, createOne, updateOne, deleteOne, find };
