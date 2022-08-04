// use this module to cherry pick functions into your prototype
// (useful for functions shared between the core and collections, for example)

// e.g.
// let foo = define.foo({ /* params... */ })

import * as util from '../util/index.js';
import animation from './animation.js';
import data from './data.js';
import events from './events.js';

let define = {};

[
  animation,
  data,
  events
].forEach(function( m ){
  util.assign( define, m );
});

export default define;
