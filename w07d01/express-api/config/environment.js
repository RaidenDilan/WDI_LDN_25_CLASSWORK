const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'environment';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/express-api-${env}`;

module.exports = { port, env, dbURI };
