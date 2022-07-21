// node modules import
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

// custom modules import
import User from '../models/User.js';
import { createUser } from '../helpers/createUser.js';
import generateToken from '../helpers/generateToken.js'

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Response} returns a response
 * @desc registration request controller
 */
const signup = async (req, res) => {
    // Validation: checks if the input meets a set of criteria 
    const errors = validationResult(req);
    /// validationResult(req) extracts the validation errors from a request and makes them available in a Result object
    
    if (!errors.isEmpty()) {
    /// do something if hasErrors is true
    /// isEmpty() returns a boolean indicating whether this result object contains no errors at all
        return res.status(400).json({
            errors: errors.array()
            /// .array() returns an array of validation errors
        })
    };

    // get input values from req.body
    const { username, email, password, confirmPassword } = req.body;

    try {
        // check for existing user with this email
        const existingEmail = await User.findOne({ email });
        /// findOne() function is used to find one document according to the condition.
        if (existingEmail) return res.status(400).json({ message: 'Email already exist' });

        // check for existing user with this username
        const existingUsername = await User.findOne({ username });
        /// findOne() function is used to find one document according to the condition.
        if (existingUsername) return res.status(400).json({ message: 'Username already exist' });

        // check if the password and confirmPassword is matching
        if (password !== confirmPassword) return res.status(400).json({ message: `Passwords don't match` });

        // hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        // generate an easy to remember custom id for the end users -> optional
         const Id = (await User.find()).length + 1;

        // map out the new user profile
         const newUser = {
            username,
            email,
            password: hashedPassword,
            id: Id, 
            createdAt: new Date()
        };

        // create a new document and save it in the database
        const savedUser = await createUser(newUser);

        // Authorisation: jwt -> user will be logged in automatically after completing registration
        // if user have to log in after registration, skip this step
        const accessToken = generateToken({ 
            username,
            id: Id
        });

        res.status(201).json({
            message: 'User is created',
            savedUser,
            accessToken
        });
    } catch (err) {
        res. status(500).json({
            message: 'Something went wrong',
            error: err.message
        });
    } 
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {void}
 * @desc sign in request controller
 */
const signin = async (req, res) => {
    // sign in with email and password
    const { email, password } = req.body;
    try {
        //check if email exist
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: 'Wrong sign in data' });

        // check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(404).json({ message: 'Wrong sign in data' });

        // authorise access
        const accessToken = generateToken({ 
            username: existingUser.username,
            id: existingUser.id
        });
        
        res.status(200).json({
            accessToken,
            user: {
                username: existingUser.username,
                id: existingUser.id
            }
        });
    } catch (err) {
        res.status(500).json({
            message: 'Something went wrong',
            error: err.message
        });
    }
};

export { signup, signin };