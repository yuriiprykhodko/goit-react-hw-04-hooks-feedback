import './Section.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className="title">
    {<h2>{title}</h2>}

    {children}
  </div>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Section;
