import mongoose from 'mongoose';

const storySchema = mongoose.Schema({
    caption: String,
    username: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    image: String,
    tags: [String],
    type: [String],
    default: [],
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})

export default mongoose.model('Story', storySchema);