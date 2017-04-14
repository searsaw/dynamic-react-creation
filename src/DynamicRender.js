import React from 'react';

const DynamicRender = ({ data: { body } }) =>
  <div className="render">
    {body.map(({ type, ...props }) => {
      const component = window.KrogerComponents[type].default;

      return React.createElement(component, props);
    })}
  </div>;

export default DynamicRender;
