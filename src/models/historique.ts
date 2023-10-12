import * as mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now() },
    description: { type: String, required: true },
    type: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    obj: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { strict: false, timestamps: true }
).index({ "$**": "text" });

export type THistory = mongoose.InferSchemaType<typeof historySchema>;
export const History = mongoose.model("History", historySchema);
