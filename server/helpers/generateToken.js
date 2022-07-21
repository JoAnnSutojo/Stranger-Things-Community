// node modules import
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// loading environment variables
dotenv.config();

/**
 * 
 * @param {Object} payload user unsensitive data
 * @returns {String} the token
 */
function generateToken(payload) {
    return jwt
    .sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:  '360s'
        }
    );
};

export default generateToken;