const MySQL = require('mysql2/promise');
const config = require('../config/config');

const db = MySQL.createConnection(config.mysql);

module.exports = db;
