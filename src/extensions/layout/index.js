import breadthfirstLayout from './breadthfirst.js';
import circleLayout from './circle.js';
import concentricLayout from './concentric.js';
import coseLayout from './cose.js';
import gridLayout from './grid.js';
import nullLayout from './null.js';
import presetLayout from './preset.js';
import randomLayout from './random.js';

export default [
  { name: 'breadthfirst', impl: breadthfirstLayout },
  { name: 'circle', impl: circleLayout },
  { name: 'concentric',impl: concentricLayout },
  { name: 'cose', impl: coseLayout },
  { name: 'grid', impl: gridLayout },
  { name: 'null', impl: nullLayout },
  { name: 'preset', impl: presetLayout },
  { name: 'random', impl: randomLayout }
];
