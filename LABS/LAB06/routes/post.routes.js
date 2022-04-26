import Router from "@koa/router";
import {createPost, getPosts, getPost} from '../api/posts.api.js'

const router = new Router({
    prefix:'/posts'
})

router.get('/', ctx =>{
    ctx.body = getPosts();
});

router.post('/', ctx =>{
    let post = ctx.request.body;
    post = createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
});

router.get('/:id', ctx =>{
    const id = ctx.params.id;
    ctx.body = getPost(id);
});

export default router;