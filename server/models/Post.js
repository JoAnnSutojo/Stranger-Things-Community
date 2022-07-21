import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
});

export default mongoose.model('Post', postSchema);
