import React from 'react';
import './styles.css'

const Loader = (props) => {
  return (
    <section
      className="section"
      {...props.containerProps}
    >
      {props.indicator}
    </section>
  );
}

export default Loader
