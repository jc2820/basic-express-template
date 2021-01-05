require("dotenv").config();

let DB_URL = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "dev") {
  DB_URL = process.env.TEST_DATABASE_URL;
}

// Add the pg-promise npm module to use db this way
const pgp = require("pg-promise")(/* options */);
const db = pgp(DB_URL);

module.exports = db;
