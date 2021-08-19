import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = ({
   total,
  positiveFeedback,
  feedbackKeys,
  feedbacksObj,
}) => {
  return (
    <ul>
      {feedbackKeys.map(feedback => (
        <li key={feedback} className="statistics">
          <span>
            {feedback}:{feedbacksObj[feedback]}
          </span>
        </li>
      ))}
      <li className="statistics">Total:{total}</li>
      <li className="statistics">
        Positive feedback:{positiveFeedback}%
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  feedbacksObj: PropTypes.object.isRequired,
  feedbackKeys: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Statistics;
