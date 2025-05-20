const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "Rajesh@62020", // Replace with your MySQL password
  database: "auth_db",
});

// Create users table if it doesn't exist
pool.query(
  `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`,
  (err) => {
    if (err) {
      console.error("Error creating users table:", err);
    } else {
      console.log("Users table ready!!");
    }
  }
);

module.exports = pool.promise();
