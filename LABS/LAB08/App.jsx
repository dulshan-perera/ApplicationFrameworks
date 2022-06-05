import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddPost from "./AddPost";
import PostsHolder from "./PostsHolder";

export default class App extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return ( 
            <BrowserRouter>
                <div style={{ border:'2px solid black', padding:10}}>
                    <Link to="/add"  style={{padding:10, textDecoration:'none', fontSize:'15pt', color:'black'}}><b>ADD</b></Link> 
                    <Link to="/" style={{padding:10, textDecoration:'none', fontSize:'15pt', color:'black'}}><b>POSTS</b></Link> 
                </div>
                <Routes>
                    <Route path="/" element={<PostsHolder save={''}/>} /> 
                    <Route path="/add" element={<PostsHolder save={'add'}/>} />
                </Routes>
            </BrowserRouter>
        )
    }
}