import { pick } from "lodash";

import { TUser, User } from "./user.model";
import { IPaginationParams } from "../../common/interfaces/common";

const getUsers = async ({ after, pageSize }: IPaginationParams) =>
  await User.find({ deleted: false }).skip(after).limit(pageSize).lean();

const getOneUser = async (userID: string) =>
  await User.findOne({ _id: userID, deleted: false }).lean();

const createUser = async (user: TUser) => await User.create(user);

const updateUser = async (id: string, user: TUser) =>
  await User.findByIdAndUpdate(
    id,
    pick(user, [
      "firstname",
      "lastname",
      "birthDate",
      "sexe",
      "email",
      "password",
      "profilePic",
      "coverPic",
      "matricule",
      "role",
      "isActive",
      "deleted",
    ]),
    { new: true }
  );

const deleteUser = async (id: string) =>
  await User.findByIdAndUpdate(id, { deleted: true }, { new: true });

export default { getUsers, getOneUser, createUser, updateUser, deleteUser };
