import Router from "@koa/router";
import {createPost, getPosts, getPost, removePost, updatePost} from '../api/posts.api.js'

const router = new Router({
    prefix:'/posts'
})

//fetch all posts route
router.get('/', async ctx =>{
    ctx.body = await getPosts();
});

//create a post route
router.post('/', async ctx =>{
    let post = ctx.request.body;
    post = await createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

//fetch one post route
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

//delete one post route
router.delete('/:id', async ctx =>{
    const id = ctx.params.id
    ctx.response.status = 204
    ctx.body = await removePost(id);
});

//update post details route
router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    const post = ctx.request.body;
    ctx.response.status = 201;
    ctx.body = await updatePost(id, post);
})

export default router;