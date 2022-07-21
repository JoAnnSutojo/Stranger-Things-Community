// node modules import
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
        validate: {
            validator: v => v.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            message: props => `${props.value} is not a valid email`
        }
    },
    password: {
        type: String,
        required: true
    },
    id: {       
        type: String
    }, 
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

const User = mongoose.model('User', userSchema);

export default User;