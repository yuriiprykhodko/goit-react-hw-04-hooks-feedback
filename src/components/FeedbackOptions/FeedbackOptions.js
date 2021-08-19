import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, feedbackKeys }) {
  return (
    <ul className="buttons">
      {feedbackKeys.map(feedback => (
        <li key={feedback}>
          <button
            className="button"
            name={feedback}
            type="button"
            onClick={onLeaveFeedback}
          >
            {feedback}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  feedbackKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

