import React, { Component } from 'react';
import Section from './Components/Section'
import Statistics from './Components/Statistics'
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (label) => this.setState(prevState => ({ [label]: prevState[label] + 1 })); 


  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    const countTotal = good + neutral + bad;
    return countTotal;
  };
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const countPositive = Math.round((good * 100) / (this.countTotalFeedback()));
    return ( countPositive
      /* countPositive === NaN ? 0 : countPositive */
    );
  };
  
  render() {
    const {good, neutral, bad} = this.state;
    const totalFeedback = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
    const leaveFeedback = this.onLeaveFeedback;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}>
          </FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ?
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={feedbackPercentage}>
          </Statistics>) : 
          (<Notification message="No feedback given"/>)}
        </Section>
      </div>   
    )
  }
}

export default App;

