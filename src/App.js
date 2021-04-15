import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
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
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        const positive = (this.state.good * 100) / totalFeedback;

        return totalFeedback === 0 ? 0 : Math.round(positive);
    };
    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={this.state}
                        onLeaveFeedback={this.handleCountFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {totalFeedback !== 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification />
                    )}
                </Section>
            </div>
        );
    }
}

export default App;
