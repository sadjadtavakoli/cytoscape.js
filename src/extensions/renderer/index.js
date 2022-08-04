import nullRenderer from './null/index.js';
import baseRenderer from './base/index.js';
import canvasRenderer from './canvas/index.js';

export default [
  { name: 'null', impl: nullRenderer },
  { name: 'base', impl: baseRenderer },
  { name: 'canvas', impl: canvasRenderer }
];
