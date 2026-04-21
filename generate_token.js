const jwt = require('jsonwebtoken');
require('dotenv').config();

const oldIat = Math.floor(Date.now() / 1000) - 7200; // 2 hours ago
const token = jwt.sign({ _id: '507f1f77bcf86cd799439011', email: 'test@test.com', iat: oldIat }, process.env.JWT_SECRET);

console.log(token);