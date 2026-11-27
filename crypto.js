const crypto = require('crypto');

const hash = crypto.createHash('she22672').update('hello').digest('hex');
console.log(hash)