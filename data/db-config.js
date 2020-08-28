const knex = require("knex");
// checking
const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "production";

module.exports = knex(config[environment]);