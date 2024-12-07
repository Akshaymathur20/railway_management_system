// db.js
// import { Pool } from 'pg';

import pg from 'pg'
const {Pool}= pg;

// Create a PostgreSQL client
const pool = new Pool({
  host: 'localhost',
  user: 'postgres', // Your PostgreSQL username
  password: 'PostgreSQL20', // Your PostgreSQL password
  database: 'railway_management', // Database name
  port: 5432, // Default port for PostgreSQL
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000, // 30 seconds
  connectionTimeoutMillis: 2000, // 2 seconds
});


// client.connect().then(()=>console.log("Connected"))


export default pool;
