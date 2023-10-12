import * as mongoose from "mongoose";
import configs from ".";

const DB_URL = configs.db;

const initDB = (): void => {
  mongoose.connect(DB_URL);

  mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database ${DB_URL}`);
  });
};

export default initDB;
