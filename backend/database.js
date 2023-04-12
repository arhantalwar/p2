const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'arhant',
    password: 'tt',
    database: 'rent_my_linux'
})

function getVMdata(callback) {
  pool.query('SELECT * FROM vm_data', (error, results) => {
    if (error) {
      console.log('Error fetching data from database:', error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
}

module.exports = { getVMdata }
