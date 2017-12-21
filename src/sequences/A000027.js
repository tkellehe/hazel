(function(global, NumberSequence, SequenceLoader) {

// Instantiate the sequence.
var sequence = new NumberSequence("A000027");

// Indicate the number of items in the sequence.
sequence.isFinite = false;
  
// Gets a speficied index of the sequence.
sequence.get = function(i) {
  return i;
}

// Checks whether or not a number is in the sequence.
sequence.is = function(n) {
  return n > 0 && (Math.floor(n) === n);
}

// Gets the index of the number provided within the sequence where negative one means cannot be found.
sequence.indexOf = function(n) {
  if(sequence.is(n)) return n;
  return -1;
}

// Gets the closest number in the sequence to the number provided that is larger.
sequence.closestUp = function(n) {
  return n >= 0 ? Math.floor(n) + 1 : 1;
}

// Gets the index of the closest number in the sequence to the number provided that is larger.
sequence.closestUpIndex = function(n) {
  return n >= 0 ? Math.floor(n) + 1 : 1;
}

// Gets the closest number in the sequence to the number provided that is smaller.
sequence.closestDown = function(n) {
  return n > 1 ? Math.ceiling(n) - 1 : 1;
}

// Gets the index of the closest number in the sequence to the number provided that is smaller.
sequence.closestDownIndex = function(n) {
  return n > 1 ? Math.ceiling(n) - 1 : -1;
}

// Get the max value in the sequence.
sequence.getMax = function() { return 1; }

// Get the index of the max value in the sequence.
sequence.getMaxIndex = function() { return 0; }

// Passes in unique parameters to the sequence that can be used to configure it.
//sequence.config = function() {}

// Publish the sequence.
SequenceLoader._sequences[sequence.name] = sequence;

})(this, this.NumberSequence, this.SequenceLoader);
