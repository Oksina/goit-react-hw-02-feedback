import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import './index.css';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleCountFeedback = ({ option }) => {
        this.setState(prevState => {
            return {
                [option.toLowerCase()]: prevState[option] + 1,
            };
        });
    };
    render() {
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleCountFeedback}
                    ></FeedbackOptions>
                </Section>
            </div>
        );
    }
}

export default App;
