import React from 'react';
import { ResponsiveContext } from 'grommet';

export default function(WrappedComponent) {
  function WrapperComponent(props) {
    return (
      <ResponsiveContext.Consumer>
        {size => <WrappedComponent viewportSize={size} viewport={size} {...props} />}
      </ResponsiveContext.Consumer>
    );
  }
  const displayName = WrappedComponent.name || WrappedComponent.displayName;
  WrapperComponent.displayName = `withViewportSize(${displayName})`;
  return WrapperComponent;
};
