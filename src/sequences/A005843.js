(function(global, NumberSequence, SequenceLoader) {

// Instantiate the sequence.
var sequence = new NumberSequence("A005843");

// Indicate the number of items in the sequence.
sequence.isFinite = false;
  
// Gets a speficied index of the sequence.
sequence.get = function(i) {
  return 2 * i;
}

// Checks whether or not a number is in the sequence.
sequence.is = function(n) {
  return !(n % 2);
}

// Gets the index of the number provided within the sequence where negative one means cannot be found.
sequence.indexOf = function(n) {
  if(n % 2) return -1;
  return Math.floor(n / 2);
}

// Gets the closest number in the sequence to the number provided that is larger.
sequence.closestUp = function(n) {
  return n + 2 - (n%2);
}

// Gets the index of the closest number in the sequence to the number provided that is larger.
sequence.closestUpIndex = function(n) {
  return (n + 2 - (n%2)) / 2;
}

// Gets the closest number in the sequence to the number provided that is smaller.
sequence.closestDown = function(n) {
  return n + (n%2) - 2;
}

// Gets the index of the closest number in the sequence to the number provided that is smaller.
sequence.closestDownIndex = function(n) {
  return (n + (n%2) - 2) / 2;
}

// Publish the sequence.
SequenceLoader._sequences[sequence.name] = sequence;

})(this, this.NumberSequence, this.SequenceLoader);
