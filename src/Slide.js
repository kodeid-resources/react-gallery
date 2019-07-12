import PropTypes from 'prop-types';
import React from 'react';

function Slide(props) {
  return (
    <article>
      <img src={props.image} alt={props.title} />
      <footer>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string
};

export default Slide;
