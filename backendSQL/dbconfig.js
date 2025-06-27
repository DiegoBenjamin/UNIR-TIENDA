// dbconfig.js
module.exports = {
  user: 'sa',
  password: 'ec0t1j',
  server: 'LAPDIEGO\\SQLEXPRESS2022', // ejemplo: localhost o 127.0.0.1 o nombre\\instancia
  database: 'unirTienda',
  options: {
    encrypt: false, // true si estás usando Azure
    trustServerCertificate: true, // solo en desarrollo
  },
};