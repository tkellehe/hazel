(function(global) {

// Basic container of helper functions and values.
var Helpers = {};

// Find number assuming ascending order.
Helpers.findIndexAscending = function(n, values) {
  if(values.length === 0) return -1;
  for(var i = values.length-1; values[i] !== n;) {
    if(values[i] > n) {
      i -= Math.floor(i / 2);
    } else if(values[i] < n && values[i+1] > n) {
      return -1;
    } else if(values[i] < n) {
      i += Math.floor(i/2);
    }
  }
  return i;
}

// Find number assuming descending order.
Helpers.findIndexDescending = function(n, values) {
  if(values.length === 0) return -1;
  for(var i = 0; values[i] !== n;) {
    if(values[i] > n) {
      i += Math.floor(i / 2);
    } else if(values[i] < n && values[i+1] > n) {
      return -1;
    } else if(values[i] < n) {
      i -= Math.floor(i/2);
    }
  }
  return i;
}

// Find number assuming ascending or descending order.
Helpers.findIndexAscendingOrDescending = function(n, values) {
  if(values.length === 0) return -1;
  if(values[0] < values[values.length-1]) {
    return Helpers.findIndexAscending(n, values);
  } else if(values[0] > values[values.length-1]) {
    return Helpers.findIndexDescending(n, values);
  }
  // Assume array is filled with the same item.
  return values[0] === n ? 0 : -1;
}

// Find number assuming unordered.
Helpers.findIndexUnordered = function(n, values) {
  for(var i = values.length; i--;) {
    if(values[i] === n) return i;
  }
  return -1;
}


// Publish the interface.
global.Helpers = Helpers;

})(this);
