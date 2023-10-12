import mongoose from "mongoose";
import Joi from "joi";
// import { jwt } from '@elysiajs/jwt'

// import configs from "../configs";
import { History } from "./historique";
import { EUserGenre, EUserRole } from "../common/enums/common";

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    birthDate: Date,
    sexe: {
      type: String,
      enum: [EUserGenre.FEMALE, EUserGenre.MALE, EUserGenre.OTHER],
    },
    profilePic: [String],
    coverPic: [String],

    email: String,
    password: String,
    matricule: String,
    role: {
      type: String,
      enum: [
        EUserRole.DIRECTOR,
        EUserRole.ADMIN,
        EUserRole.PROFESSOR,
        EUserRole.PARENT,
        EUserRole.TUTOR,
        EUserRole.STUDENT,
      ],
    },

    isActive: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
  },
  {
    methods: {
      generateAuthToken() {
        // generate token from informations about the user
        // ...
      },
      async generateHistory(desc: string, type: string, data) {
        // generate history for each user activity
        // get user information directly from here

        let histo = new History({
          description: desc,
          user: this._id,
          type: type,
          obj: data,
        });

        await histo.save();
      },
    },
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user: any = this;

  if (!user.password) {
    next();
  }

  const hashedPwd = await Bun.password.hash(user.password, {
    algorithm: "argon2id",
    memoryCost: 4,
    timeCost: 3,
  });

  user.password = hashedPwd;
  next();
});

export type TUser = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model("User", userSchema);

export const validateUser = (user: TUser) => {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(25),
    lastname: Joi.string().min(3).max(25),
    username: Joi.string().min(5).max(15),
    password: Joi.string().alphanum().min(8).max(50),
    sexe: Joi.string(),
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    image: Joi.array().items(Joi.string()),
    role: Joi.string(),
    deleted: Joi.boolean(),
  });

  return schema.validate(user);
};
