import * as mongoose from "mongoose";

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/mongoose-app";

await mongoose.connect(DB_URL);
