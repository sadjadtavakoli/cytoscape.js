import window from '../window.js';

let styfn = {};

// gets what an em size corresponds to in pixels relative to a dom element
styfn.getEmSizeInPixels = function(){
  let px = this.containerCss( 'font-size' );

  if( px != null ){
    return parseFloat( px );
  } else {
    return 1; // for headless
  }
};

// gets css property from the core container
styfn.containerCss = function( propName ){
  let cy = this._private.cy;
  let domElement = cy.container();

  if( window && domElement && window.getComputedStyle ){
    return window.getComputedStyle( domElement ).getPropertyValue( propName );
  }
};

export default styfn;
