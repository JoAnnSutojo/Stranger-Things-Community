import jwt from 'jsonwebtoken';

export const validateToken = async (req, res, next) => {
    try {
        // access authorization headers
        const authHeader = req.headers['authorization'];
        ///  req.headers['authorization'] : "Bearer TOKEN"

        // get token portion from the headers
        const token = authHeader && authHeader.split(' ')[1];
        /// first make sure we actually have a header -> authHeader &&
        /// if we have it, return the authHeader TOKEN portion. Otherwise return undefined

        // do a check to see if our token is null/undefined
        if (!token) return res.send('Forbidden !!');

        // verify the token
        await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) throw err;
            /// if we get past this, we know we have a valid token

            //set our user in our request
            req.user = payload;
            next();
        });
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: err.message });
    }
};