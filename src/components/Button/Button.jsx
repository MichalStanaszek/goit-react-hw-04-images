import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
