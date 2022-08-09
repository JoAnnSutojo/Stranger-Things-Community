// mode modules import
import mongoose from 'mongoose';

// custom modules import
import Story from '../models/Story.js';

export const getStories= async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
  };

  export const createStory = async (req, res) => {
    const body = req.body;

    const newStory = new Story({
        ...body,
        userId: req.user.id,
        postDate: new Date().toISOString(),
    });

    try {
        await newStory.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
};

export const updateStory = async (req, res) => {
    // identify the story - renaming the property name of id to _id (_id can be any name)
    const { id: _id } = req.params;
    // apply these changes
    const story = req.body;
    // validate the object id
    if (!mongoose.Types.ObjectId.isValid(_id)) 
        return res.status(404).send('This id does not belong to any story');
    // find and update
    try {
        const updatedStory= await Story.findByIdAndUpdate(_id, story, { new: true });
        console.log(updatedStory)
        res.status(204).json(updatedStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const deleteStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`Story doesn't exist`);

    try {
        await Story.findByIdAndRemove(id);
        res.status(205).json({ message: "Story deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const likeStory = async (req, res) => {
    const { id } = req.params;

    if (!req.user.id)
        return res.json({ message: 'Unauthenticated User' });

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send('No post with that id');

    try {
        const post = await Story.findById(id);
        // check if the logged in user didn't like this story before
        const index = story.likes.findIndex((userID) => userID !== String(req.user.id));
        
        if (index === -1) {
            story.likes.push(req.user.id);
        } else {
            story.likes = story.likes.filter((userID) => userID !== String(req.user.id));
        }
        const updatedStory = await Story.findByIdAndUpdate(id, story, {new: true});
        res.status(200).json(updatedStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
