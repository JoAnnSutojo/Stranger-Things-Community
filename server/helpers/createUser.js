import User from '../models/User.js';

/**
 * 
 * @param {*} newUser 
 * @returns {mongoose.Document} 
 */
// function to create a new user
export const createUser = async(newUser) => {
    const user = await User.create(newUser);
    return user;
};