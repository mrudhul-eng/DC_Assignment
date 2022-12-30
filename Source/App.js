import React, { Component } from 'react';
import { Container } from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logInfo: ''
        }
    }

    render() {
        return (
            <Container className="app-container">
                <h2>Speech Recognition</h2>
                <div className="body">
                    <div className="col-6 textarea">
                        <code>{this.state.logInfo}</code>
                    </div>
                </div>
                <div className="mt-3">
                        <i className="fas fa-microphone fa-lg mr-2" onClick={() => this.inputMicrophone()}></i>
                        Tap to Speak From Your Microphone</div>
            </Container>
        );
    }
}