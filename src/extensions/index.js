import layout from './layout/index.js';
import renderer from './renderer/index.js';

export default [
  {
    type: 'layout',
    extensions: layout
  },

  {
    type: 'renderer',
    extensions: renderer
  }
];
