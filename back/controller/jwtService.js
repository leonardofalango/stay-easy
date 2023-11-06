const jwt = require('jsonwebtoken');

class Jwt {
    static create = async (data) => {
        const token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: JSON.stringify(data)
            },
            process.env.JWT_SECRET
        );

        return token
    }

    static verify = async (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
}

module.exports = Jwt;