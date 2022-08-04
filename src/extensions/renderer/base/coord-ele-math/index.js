import * as util from '../../../../util/index.js';

import coords from './coords.js';
import edgeArrows from './edge-arrows.js';
import edgeControlPoints from './edge-control-points.js';
import edgeEndpoints from './edge-endpoints.js';
import edgeProjection from './edge-projection.js';
import labels from './labels.js';
import nodes from './nodes.js';
import renderedStyle from './rendered-style.js';
import zOrdering from './z-ordering.js';

var BRp = {};

[
  coords,
  edgeArrows,
  edgeControlPoints,
  edgeEndpoints,
  edgeProjection,
  labels,
  nodes,
  renderedStyle,
  zOrdering
].forEach(function( props ){
  util.extend( BRp, props );
});

export default BRp;
