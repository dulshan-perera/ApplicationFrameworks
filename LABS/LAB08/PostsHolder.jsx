import React from "react";
import AddPost from "./AddPost";
import Posts from "./Posts";

const posts = [
    {
        id: 1,
        name: 'React',
        description: 'Best UI library'
    }, {
        id: 2,
        name: 'Node',
        description: 'Server side JS'
    }
   ];
   
export default class PostsHolder extends React.Component{
    constructor(props){
        super(props)

    }
    
    addNewPost({name, description}){
        posts.push({id: posts.length + 1, name, description});
    }

    render(){
        const {save} = this.props
        return (
            <div>
                {
                    save === 'add'?
                        <AddPost save={this.addNewPost}/> :
                    save === '' ?
                        <Posts posts={posts} /> :
                    ''
                }
            </div>
        )
        
    }
}