export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  dbHost: process.env.DB_HOST,
  dbPort: +process.env.DB_PORT,
  dbUsename: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  schemaSync: process.env.SCHEMA_SYNC,
  ssl: process.env.SSL,
  gatewayPORT: process.env.GATEWAY_PORT,
  mailUsr: process.env.MAIL_USR,
  mailPass: process.env.MAIL_PASS
});

