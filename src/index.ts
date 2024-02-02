import dotenv from "dotenv";
import checkEnvVars from "./utils/checkEnvVars";
import app from "./app";
import initDb from "./db";

dotenv.config();

const port = process.env.PORT;

const start = async () => {
  console.log("Starting up........");

  console.log("Checking env vars........");
  checkEnvVars();

  console.log("Initializing MongoDb........");
  await initDb();

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};

start();
