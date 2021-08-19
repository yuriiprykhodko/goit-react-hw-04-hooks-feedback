import './Notification.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <>
    <h2 className="message">{message}</h2>
  </>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
