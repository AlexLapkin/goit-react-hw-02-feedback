import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ( {options, onLeaveFeedback}) => {
    let arrStateKeys = Object.keys(options);
    return (
<div className={css.feedback_cont}>
    {arrStateKeys.map(option => (
       <button className={css.feedback_btn} 
       key={option}
       name={option}
       onClick={() => onLeaveFeedback(option)}>{option}</button>
    )
)}
</div>
    )
}

FeedbackOptions.protoTypes = {
    options: PropTypes.object, 
    onLeaveFeedback: PropTypes.func,
}

export default FeedbackOptions;