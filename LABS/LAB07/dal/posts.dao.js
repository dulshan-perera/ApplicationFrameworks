import {client} from './index.js';
const posts = client.db('posts').collection('posts')

//save post to db
const save = async({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description, postedDate});
    return result;
};

//fetch all from db
const getAll = async () =>{
    const cursor = await posts.find();
    return cursor.toArray();
}

//fetch onePost ById from db
const getById = async id =>{
    return await posts.findOne({id});
}

//remove onePost ById from db
const removeById = async id =>{
    await posts.deleteOne({id});
}

//update onePost ById in db
const update = async (id, {name, description, postedDate}) =>{
    const result = await posts.replaceOne({id},{id, name, description, postedDate});
    return result;
}

export {save, getAll, getById, removeById, update};