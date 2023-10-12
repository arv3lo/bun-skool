import mongoose from "mongoose";
import configs from ".";

const DB_URL = configs.db;

const initDB = (): void => {
  mongoose
    .connect(DB_URL)
    .then(() => console.info(`Successfully connected to ${DB_URL} ...`));

  mongoose.connection.on("error", (err) => {
    console.log("===ERR===", err);
    throw new Error(`Unable to connect to database ${DB_URL} ...`);
  });
};

export default initDB;
