import mongoose  from 'mongoose';
import PostMessage from './../models/postMessage';

export const getPosts = async (req, res) => {
    try{
      const postMessages = await PostMessage.find();
      //console.log('All messages', postMessages);

      res.status(200).json(postMessages);
    }catch(e){
      res.status(404).json({ message: e.message });
    }
  }

  export const createPost = async (req, res)=>{
    const post = req.body;
    const newPost = new PostMessage(post);
    try{
      await newPost.save();
      res.status(201).json(newPost);
    }catch(e){
      //The HTTP 409 Conflict response status code indicates a request conflict with current state of the target resource.
      res.status(409).json({ message: e.message });
    }
  }

  export const updatePost = async (req, res)=>{
    const { id: _id } = req.params;
    const post = req.body;
    // Check is '_id' is mongoose id
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There is no post");
    try{
      const updatedPost = await PostMessage.findOneAndUpdate(_id, { ...post, _id }, { new: true });
      res.status(200).json(updatedPost);
    }catch(e){
      res.status(404).json({ message: e.message });
    }
  }

  export const deletePost = async (req, res)=>{
    const { id: _id } = req.params;
    // Check is '_id' is mongoose id
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There is no post");
    try{
      await PostMessage.findByIdAndRemove(_id);
      res.status(200).json({ message: "Post deleted successfully" });
    }catch(e){
      res.status(404).json({ message: e.message });
    }
  }