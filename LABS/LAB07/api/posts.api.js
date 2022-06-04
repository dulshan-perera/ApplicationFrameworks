import { v4 as uuidv4 } from 'uuid';
import {save, getAll, getById, removeById, update} from '../dal/posts.dao.js';

// let posts = new Map();

// const Post ={
//     id:"",
//     name:"",
//     description:"",
//     postedDate:""
// }

//create post
const createPost = async(Post) =>{
    const id = uuidv4()
    const date = new Date();
    Post.id = id;
    Post.postedDate = date;
    return await save(Post)
    // posts.set(id, Post)
}

//fetch all posts
const getPosts = async () =>{
    return await getAll();
    // return [...posts.values()];
}

//fetch a post
const getPost = async (id) =>{
    return await getById(id);
    // return posts.get(id);
}

//deletes a post
const removePost = async (id) =>{
    await removeById(id);
}

//upates post details
const updatePost = async (id, Post) =>{
    Post.postedDate = new Date();
    return await update(id, Post)
}

export {createPost, getPosts, getPost, removePost, updatePost};