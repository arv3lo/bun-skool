import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    sound: { type: String, required: true },
  },
  {
    methods: {
      speak() {
        console.log(`${this.sound}!`);
      },
    },
  }
);

export type TUser = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model("User", userSchema);
