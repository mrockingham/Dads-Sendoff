// Update with your config settings.
const pgConnection = process.env.DATABASE_URL || "postgresql://postgres@localhost/dads";

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: 'localhost',
      database: 'dads',
      user:     'postgres',
      password: 'battlezon2'
    },
  
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
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
