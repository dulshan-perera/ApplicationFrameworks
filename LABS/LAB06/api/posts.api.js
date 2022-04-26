import { v4 as uuidv4 } from 'uuid';
let posts = new Map();

const Post ={
    id:"",
    name:"",
    description:"",
    postedDate:""
}

const createPost = (Post) =>{
    const id = uuidv4()
    const date = new Date();
    Post.id = id;
    Post.postedDate = date;
    posts.set(id, Post)
}

const getPosts = () =>{
    return [...posts.values()];
}

const getPost = (id) =>{
    return posts.get(id);
}

export {createPost, getPosts, getPost};