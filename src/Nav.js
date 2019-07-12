import PropTypes from 'prop-types';
import React from 'react';

import styles from './nav-styles.js';

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={styles.prev} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button style={styles.next} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Nav;
