import * as is from '../is.js';
import { memoize } from './memoize.js';

export const camel2dash = memoize(str => {
  return str.replace( /([A-Z])/g, v => {
    return '-' + v.toLowerCase();
  } );
});

export const dash2camel = memoize(str => {
  return str.replace( /(-\w)/g, v => {
    return v[1].toUpperCase();
  } );
});

export const prependCamel = memoize(( prefix, str ) => {
  return prefix + str[0].toUpperCase() + str.substring(1);
}, ( prefix, str ) => {
  return prefix + '$' + str;
});

export const capitalize = str => {
  if( is.emptyString( str ) ){
    return str;
  }

  return str.charAt( 0 ).toUpperCase() + str.substring( 1 );
};
