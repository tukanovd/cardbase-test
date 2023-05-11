/// <reference types="react-scripts" />

declare module '*.svg' {
  import React from 'react';
  import { ReactComponent as Component } from 'some-svg-file.svg';
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: Component;
  export default content;
}
