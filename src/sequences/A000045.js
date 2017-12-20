(function(global, NumberSequence, SequenceLoader) {

// Instantiate the sequence.
var sequence = new NumberSequence("A000045");

// Indicate the number of items in the sequence.
sequence.isFinite = false;
sequence.isFixed = false;

sequence._allValues = {};
sequence._n = 0;
sequence._m = 1;

sequence._update = function() {
  sequence._LAST_INDEX = sequence._values.length-1;
  sequence._LAST = sequence._values[sequence._LAST_INDEX];
}

function expand_fib_to_number(m) {
  while(sequence._LAST < m) {
    sequence._values.push(sequence._values[sequence._LAST_INDEX] + sequence._values[sequence._LAST_INDEX-1]);
    sequence._update();
  }
}

function expand_fib_to_index(i) {
  while(sequence._LAST_INDEX < i) {
    sequence._values.push(sequence._values[sequence._LAST_INDEX] + sequence._values[sequence._LAST_INDEX-1]);
    sequence._update();
  }
}
  
// Gets a speficied index of the sequence.
sequence.get = function(i) {
  if(i > sequence._LAST_INDEX) {
    expand_fib_to_index(i);
  }
  return sequence._values[i];
}

// Checks whether or not a number is in the sequence.
sequence.is = function(n) {
  expand_fib_to_number(n);
  for(var i = sequence._LAST_INDEX; sequence._values[i] !== n;) {
    if(sequence._values[i] > n) {
      i = Math.floor(i / 2);
    } else if(sequence._values[i] < n && sequence._values[i+1] > n) {
      return false;
    } else if(sequence._values[i] < n) {
      i = i+1;
    }
  }
  return true;
}

// Gets the index of the number provided within the sequence where negative one means cannot be found.
sequence.indexOf = function(n) {
  expand_fib_to_number(n);
  for(var i = sequence._LAST_INDEX; sequence._values[i] !== n;) {
    if(sequence._values[i] > n) {
      i = Math.floor(i / 2);
    } else if(sequence._values[i] < n && sequence._values[i+1] > n) {
      return -1;
    } else if(sequence._values[i] < n) {
      i = i+1;
    }
  }
  return i;
}

// Gets the closest number in the sequence to the number provided that is larger.
sequence.closestUp = function(n) {
  return sequence._values[sequence.closestUpIndex(n)];
}

// Gets the index of the closest number in the sequence to the number provided that is larger.
sequence.closestUpIndex = function(n) {
  if(n > sequence._LAST) {
    expand_fib_to_number(n);
    return sequence._LAST_INDEX;
  }
  
  for(var i = sequence._LAST_INDEX; sequence._values[i] !== n;) {
    if(sequence._values[i] > n) {
      i = Math.floor(i / 2);
    } else if(sequence._values[i] < n && sequence._values[i+1] > n) {
      break;
    } else if(sequence._values[i] < n) {
      i = i+1;
    }
  }
  return i+1;
}

// Gets the closest number in the sequence to the number provided that is smaller.
sequence.closestDown = function(n) {
  return sequence._values[sequence.closestDownIndex(n)];
}

// Gets the index of the closest number in the sequence to the number provided that is smaller.
sequence.closestDownIndex = function(n) {
  if(n <= 2) return -1;
  if(n > sequence._LAST) {
    expand_fib_to_number(n);
    return sequence._LAST_INDEX-1;
  }
  
  for(var i = sequence._LAST_INDEX; sequence._values[i] !== n;) {
    if(sequence._values[i] > n) {
      i = Math.floor(i / 2);
    } else if(sequence._values[i] < n && sequence._values[i+1] > n) {
      break;
    } else if(sequence._values[i] < n) {
      i = i+1;
    }
  }
  return i;
}

// Get the max value in the sequence.
sequence.getMax = function() { return sequence._LAST; }

// Get the index of the max value in the sequence.
sequence.getMaxIndex = function() { return sequence._LAST_INDEX; }

// Passes in unique parameters to the sequence that can be used to configure it.
sequence.config = function(n, m) {
  sequence._n = n;
  if(m !== undefined) sequence._m = m;
  if(sequence._allValues[sequence._n] === undefined) {
    sequence._allValues[sequence._n] = {};
  }
  if(sequence._allValues[sequence._n][sequence._m] === undefined) {
    sequence._allValues[sequence._n][sequence._m] = [sequence._n, sequence._m];
  }
  sequence._values = sequence._allValues[sequence._n][sequence._m];
}

sequence.config(sequence._n, sequence._m);
for(var i = 1000; i--;) {
  var f1 = sequence._values.length-1;
  var f2 = f1 - 1;
  sequence._values.push(sequence._values[f1] + sequence._values[f2]);
}
sequence._update();

// Publish the sequence.
SequenceLoader._sequences[sequence.name] = sequence;

})(this, this.NumberSequence, this.SequenceLoader);
