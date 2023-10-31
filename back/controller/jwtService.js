const jwt = require('jsonwebtoken');

class Jwt {
    static create = (data) => {
        return jwt.sign(data, process.env.JWT_SECRET);
    }

    static verify = (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

module.exports = Jwt;