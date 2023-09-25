import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button className={styles.Button} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
