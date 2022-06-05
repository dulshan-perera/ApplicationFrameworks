import React from "react";

export default class AddPost extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"",
            description:""
        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        const {save} = this.props
        const {name, description} = this.state;
        return(
            <div>
                <center>
                    <h2>ADD A POST</h2>
                <form>
                    <label>Enter Post Name</label><br/>
                    <input type="text" name="name" onChange={this.handleChange} value={name} /><br/>
                    <br/>
                    <label>Enter Description</label> <br/>
                    <input type="text" name="description" onChange={this.handleChange} value={description} /><br />
                    <br/>
                    <button type="submit" onClick={(e) =>{ 
                        e.preventDefault();
                        save({
                            name: this.state.name,
                            description: this.state.description
                        });
                        this.setState({
                            name: '', 
                            description:''
                        })
                        alert('Post Added!')
                    }}>
                        ADD POST
                    </button>
                </form>
                </center>
            </div>
        )
    }
}