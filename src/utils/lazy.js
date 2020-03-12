import loadable from '@loadable/component';
import { PrerenderedComponent } from 'react-prerendered-component';
import React from 'react';

const lazy = dynamicImport => {
  const LoadableComponent = loadable(dynamicImport);
  return React.memo(props => (
    // you can use the `.preload()` method from react-loadable or react-imported-component`
    <PrerenderedComponent live={LoadableComponent.load()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};

export default lazy;
