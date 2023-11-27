// sqlServerConnection.js

import sql from 'mssql';

const config = {
  server: 'DESKTOP-978U9AM\\SQLEXPRESS', // Update with your server name
  database: 'HotelDB',
  options: {
    encrypt: false, // If using Azure SQL Database, set to true
    trustServerCertificate: true, // If using self-signed certificates, set to true
    authentication: {
      type: 'default',
      options: {
        trustedConnection: true, // Use Windows Authentication
      }
    }
  },
};

// Create a pool instance for the SQL Server connection
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch((err) => {
    console.error('Error connecting to SQL Server:', err);
    process.exit(1); // Terminate the process on connection error
  });

export { poolPromise };
