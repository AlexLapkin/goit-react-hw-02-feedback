import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
   };

  handleClick = option => {
    this.setState((prevState) => {
        return {
       [option]: prevState[option] + 1,
        }
    });
}

countTotalFeedback = () =>
Object.values(this.state).reduce((acc, value) => acc + value, 0);

countPositiveFeedbackPercentage = () => 
Math.round((this.state.good / this.countTotalFeedback())*100); 

render() {
  const { good, neutral, bad } = this.state;
  return (
    <div>
     <Section  title="Please leave feedback">
     <FeedbackOptions
     options={Object.keys(this.state)}
     onLeaveFeedback={this.handleClick} />
    </Section>
     
    { (this.countTotalFeedback()) ? ( 
     <Section title="Statistics">
     <Statistics
     good = {good}
     neutral = {neutral}
     bad = {bad}
     total = {this.countTotalFeedback()}
     positivePercentage={this.countPositiveFeedbackPercentage()}
     />
     </Section>
     ) : (
     <Notification message = "There is no feedback!">
     </Notification>
   )
     }
    </div> 
  );
};
}