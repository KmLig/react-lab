import React, { Component } from "react";

class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            day: "today",
            date: 12
        }
    }
    render(){
        return(
            <h4>HI + {this.state.day}</h4>
        )
    }
}

export default Test;
