'use strict';

exports.PORT = process.env.PORT || 8080;

exports.DB_HOST =
  process.env.DB_HOST || "localhost";

exports.DB_PORT = 
  process.env.DB_PORT || "1100";

exports.DB_USER = 
	process.env.DB_USER || "hsb";

exports.DB_PWORD = 
	process.env.DB_PWORD || "tape-blue!";

exports.DB_NAME =
	process.env.DB_NAME || "ignite"

// exports.DB_HOST =
//   process.env.DB_HOST || "localhost";

// exports.DB_PORT = 
//   process.env.DB_PORT || "3306";

// exports.TEST_DB_HOST =
//   process.env.TEST_DB_HOST || "localhost";

// exports.DB_USER = 
// 	process.env.DB_USER || "root";

// exports.DB_PWORD = 
// 	process.env.DB_PWORD || "orgo";

// exports.DB_NAME =
// 	process.env.DB_NAME || "orgo_db"



// exports.JWT_SECRET = process.env.JWT_SECRET || 'simple_SECRET';
// exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';