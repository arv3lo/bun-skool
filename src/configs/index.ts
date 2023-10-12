export default {
  port: process.env.PORT || 5000,
  db: process.env.DB_URL || "mongodb://localhost:27017/mongoose-app",
  jwtSecret: process.env.JWT_SECRET || "this_is_a_default_secret",
  tokenLife: process.env.JWT_LIFE,
  refreshTokenKey: process.env.REFRESH_TOKEN_KEY,
  refreshTokenLife: process.env.REFRESH_TOKEN_LIFE,
  // allowedOrigins: ["http://localhost:5000", "http://localhost:3000"],
  // REDIS_HOST: process.env.REDIS_DOMAIN_NAME,
  // REDIS_PORT: Number(process.env.REDIS_PORT_NUMBER),
  // REDIS_TLS: Number(process.env.REDIS_TLS),
};