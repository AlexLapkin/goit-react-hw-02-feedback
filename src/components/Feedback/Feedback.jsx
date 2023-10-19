import { Component } from 'react';
import css from './Feedback.module.css';

//let total = 0;
//let positiveFeedbackPercentage = 0;

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
        //total: 0,
        //positiveFeedbackPercentage: 0
    }

    handleClick = option => {
        this.setState((prevState) => {
            return {
           [option]: prevState[option] + 1,
            }
        });
    }

    onLeaveFeedback = event => {
        const option = event.target.textContent;
        this.handleClick(option);
        }

    //countTotalFeedback = () => {
    //    this.setState((state) => ({
    //       total: state.good + state.neutral + state.bad,
           
   //     }))
   // return total;
    //}

    countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
      // }

    //countPositiveFeedbackPercentage = () => {
     //   this.setState((state) => ({
    //        positiveFeedbackPercentage: state.good / total,
   //     }))
 //   };


render() {
    return (
    <div>
       <h1>Please leave feedback</h1>
       <button className={css.feedback_btn} onClick={this.onLeaveFeedback}>good</button>
       <button className={css.feedback_btn} onClick={this.onLeaveFeedback}>neutral</button>
       <button className={css.feedback_btn} onClick={this.onLeaveFeedback}>bad</button>
       <h2>Statistics</h2>
       <p>Good: {this.state.good}</p>
       <p>Neutral: {this.state.neutral}</p>
       <p>Bad: {this.state.bad}</p>
       <p>Total: {this.countTotalFeedback()}</p>
       <p>Positive feedback: </p>
    </div>
    )
}

}

export default Feedback;