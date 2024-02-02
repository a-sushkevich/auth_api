const checkEnvVars = () => {
  if (!process.env.PORT) {
    throw new Error("PORT must be defined");
  }
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }
};

export default checkEnvVars;
