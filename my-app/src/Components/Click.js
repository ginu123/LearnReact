import React, { Component } from 'react';

class Click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count1:0,
            count2:0
        }
    }

    UpdateClick = ()=>{
        this.setState({count1:this.state.count1+1});
    }

    IncrementCount = ()=>{
        this.setState({count2:this.state.count2+1});
    }
    render() {
        return (
            <div>
                <button onClick={this.UpdateClick}>You clicked me {this.state.count1} time</button>
                <button onMouseMove={this.IncrementCount}>Incremnented count by {this.state.count2}</button>
            </div>
        );
    }
}

export default Click;