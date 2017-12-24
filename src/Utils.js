(function(global) {

// Basic container of helper functions and values.
var Utils = {};
//--------------------------------------------------------------------
Utils.integer = function(n) { return Math.floor(n); }
Utils.integer.is = function(n) { return n === Utils.integer(n); }
Utils.integer.divide = function(n, m) { return Math.floor(Math.floor(n) / Math.floor(m)); }

Utils.whole = function(n) { return Math.abs(Math.floor(n)); }
Utils.whole.is = function(n) { return n === Utils.whole(n); }
Utils.whole.divide = function(n, m) { return Math.abs(Math.floor(Math.floor(n) / Math.floor(m))); }

Utils.natural = function(n) { n = Math.abs(Math.floor(n)); return n === 0 ? 1 : n; }
Utils.natural.is = function(n) { return n === Utils.natural(n); }
Utils.natural.divide = function(n, m) { return Math.floor(Utils.natural(n) / Utils.natural(m)); }

//--------------------------------------------------------------------
// Find number assuming ascending order.
Utils.findIndexAscending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length;
  for(var i = l-1; values[i] !== n;) {
    if(values[i] > n) {
      i -= Math.floor((l-i) / 2);
    } else if(values[i] < n && values[i+1] > n) {
      return -1;
    } else if(values[i] < n) {
      i += Math.floor((l-i) / 2);
    }
  }
  return i;
}

// Find number assuming descending order.
Utils.findIndexDescending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length-1;
  for(var i = 0; values[i] !== n;) {
    if(values[i] > n) {
      i += Math.floor((l-i) / 2);
    } else if(values[i] < n && values[i+1] > n) {
      return -1;
    } else if(values[i] < n) {
      i -= Math.floor((l-i) / 2);
    }
  }
  return i;
}

// Find number assuming ascending or descending order.
Utils.findIndexAscendingOrDescending = function(n, values) {
  if(values.length === 0) return -1;
  if(values[0] < values[values.length-1]) {
    return Utils.findIndexAscending(n, values);
  } else if(values[0] > values[values.length-1]) {
    return Utils.findIndexDescending(n, values);
  }
  // Assume array is filled with the same item.
  return values[0] === n ? 0 : -1;
}

// Find number assuming unordered.
Utils.findIndexUnordered = function(n, values) {
  for(var i = values.length; i--;) {
    if(values[i] === n) return i;
  }
  return -1;
}

// Find closest up number assuming ascending order.
Utils.closestUpIndexAscending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length-1;
  for(var i = values.length-1; values[i] !== n;) {
    if(values[i] > n) {
      i -= Math.floor((l-i) / 2)
    } else if(values[i] < n && values[i+1] > n) {
      break;
    } else if(values[i] < n) {
      i += Math.floor((l-i) / 2)
    }
  }
  return i+1;
}

// Find closest up number assuming descending order.
Utils.closestUpIndexDescending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length-1;
  for(var i = 0; values[i] !== n;) {
    if(values[i] > n) {
      i += Math.floor((l-i) / 2);
    } else if(values[i] < n && values[i+1] > n) {
      break;
    } else if(values[i] < n) {
      i -= Math.floor((l-i) / 2);
    }
  }
  return values[i] === n ? i-1 : i;
}

// Find closest up number assuming ascending or descending order.
Utils.closestUpIndexAscendingOrDescending = function(n, values) {
  if(values.length === 0) return -1;
  if(values[0] < values[values.length-1]) {
    return Utils.closestUpIndexAscending(n, values);
  } else if(values[0] > values[values.length-1]) {
    return Utils.closestUpIndexDescending(n, values);
  }
  // Assume array is filled with the same item.
  return 0;
}

// Find closest up number assuming unordered.
Utils.closestUpIndexUnordered = function(n, values) {
  if(values.length === 0) return -1;
  var closest = values.length-1;
  var min = n - values[closest];
  for(var i = values.length-1; i--;) {
    var d = n - values[i];
    if(min > 0 && d < 0) { min = d; closest = i; }
    else if(d > 0 && min > 0 && min > d) { min = d; closest = i; }
    else if(d < 0 && d > min) { min = d; closest = i; }
  }
  return closest;
}

// Find closest down number assuming ascending order.
Utils.closestDownIndexAscending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length-1;
  for(var i = values.length-1; values[i] !== n;) {
    if(values[i] > n) {
      i -= Math.floor((l-i) / 2);
    } else if(values[i] < n && values[i+1] > n) {
      break;
    } else if(values[i] < n) {
      i += Math.floor((l-i) / 2);
    }
  }
  return values[i] === n ? i-1 : i;
}

// Find closest down number assuming descending order.
Utils.closestDownIndexDescending = function(n, values) {
  if(values.length === 0) return -1;
  var l = values.length-1;
  for(var i = 0; values[i] !== n;) {
    if(values[i] > n) {
      i += Math.floor((l-i) / 2);
    } else if(values[i] < n && values[i+1] > n) {
      break;
    } else if(values[i] < n) {
      i -= Math.floor((l-i) / 2);
    }
  }
  return i+1;
}

// Find closest down number assuming ascending or descending order.
Utils.closestDownIndexAscendingOrDescending = function(n, values) {
  if(values.length === 0) return -1;
  if(values[0] < values[values.length-1]) {
    return Utils.closestDownIndexAscending(n, values);
  } else if(values[0] > values[values.length-1]) {
    return Utils.closestDownIndexDescending(n, values);
  }
  // Assume array is filled with the same item.
  return n > values[0] ? 0 : -1;
}

// Find closest down number assuming unordered.
Utils.closestDownIndexUnordered = function(n, values) {
  if(values.length === 0) return -1;
  var closest = values.length-1;
  var min = values[closest] - n;
  for(var i = values.length-1; i--;) {
    var d = values[i] - n;
    if(min > 0 && d < 0) { min = d; closest = i; }
    else if(d > 0 && min > 0 && min > d) { min = d; closest = i; }
    else if(d < 0 && d > min) { min = d; closest = i; }
  }
  return closest;
}


// Publish the interface.
global.Utils = Utils;

})(this);
