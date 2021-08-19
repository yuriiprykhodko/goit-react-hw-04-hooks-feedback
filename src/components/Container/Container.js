import PropTypes from 'prop-types';
import'./Container.css';

const Container = ({ children }) => (
  <div className="Container">{children}</div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;