// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/dads";

module.exports = {

  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dads.db3",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
production: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'dads.sql',
      user:     'postgres',
      password: 'battlezon2'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }

};
