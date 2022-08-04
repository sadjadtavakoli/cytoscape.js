import * as util from '../../util/index.js';
import position from './position.js';
import bounds from './bounds.js';
import widthHeight from './width-height.js';
import edgePoints from './edge-points.js';

export default util.assign( {}, position, bounds, widthHeight, edgePoints );
