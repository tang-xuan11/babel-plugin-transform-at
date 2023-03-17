"use strict";

function _at(_array, n) {
  n = Math.trunc(n) || 0;
  if (n < 0) n += _array.length;
  if (n < 0 || n >= _array.length) return undefined;
  return _array[n];
}

var array = [1, 2, 3];
console.log(_at(array, 0));
