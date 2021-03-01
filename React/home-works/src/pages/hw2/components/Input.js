import React from "react";
import Display from "./Dispaly";

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.getInputData = this.getInputData.bind(this);
        this.state = {
            text: ''
        }
    }

    getInputData(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return (
            <>
                <br/>
                <input type='text' placeholder="Type something..." onInput = {this.getInputData}/>
                <Display text={this.state.text}/>
            </>
        );
    }
}
