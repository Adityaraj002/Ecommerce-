import { app } from "./app.js";
import dotenv from "dotenv";
import ConnectDb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

ConnectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at ${port}`);
    });

    app.on("error", (error) => {
      console.log("error : ",error);
      throw error
    })
  })
  .catch((error) => {
    console.log("MongoDb Connection Failed in server.js",error);
  });
