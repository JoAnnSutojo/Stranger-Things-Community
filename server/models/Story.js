import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    caption: { 
        type: String, 
        required: true 
    },
    username: {
        type: String,
        required: true 
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    image: {
        type: String,
        required: true 
    },
    tags: [String],
    likes: {
        type: [String],
        default: [],
    }
    postDate: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

export default mongoose.model('Story', storySchema);