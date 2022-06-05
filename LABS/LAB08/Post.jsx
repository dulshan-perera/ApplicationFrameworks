import React from "react";

export default class Post extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {post} = this.props;
        return <div>
            <center><h2>POST DETAILS</h2></center>
            <div>
                <p>ID: {post.id}</p>
            </div>
            <div>
                <p>Name: {post.name}</p>
            </div>
            <div>
                <p>Description: {post.description}</p>
            </div>
        </div>;
    }
}