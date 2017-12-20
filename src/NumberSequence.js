(function(global) {

// Main class for handling number sequences.
function NumberSequence(name) {
  this.name = (typeof name === "string") ? name : "undefined";
  this.isFinite = true;
  this.isFixed = true;
}

// Gets a speficied index of the sequence.
NumberSequence.prototype.get = function(i) { return i; }

// Checks whether or not a number is in the sequence.
NumberSequence.prototype.is = function(n) { return false; }

// Gets the index of the number provided within the sequence where negative one means cannot be found.
NumberSequence.prototype.indexOf = function(n) { return -1; }

// Gets the closest number in the sequence to the number provided that is larger.
NumberSequence.prototype.closestUp = function(n) { return undefined; }

// Gets the index of the closest number in the sequence to the number provided that is larger.
NumberSequence.prototype.closestUpIndex = function(n) { return undefined; }

// Gets the closest number in the sequence to the number provided that is smaller.
NumberSequence.prototype.closestDown = function(n) { return undefined; }

// Gets the index of the closest number in the sequence to the number provided that is smaller.
NumberSequence.prototype.closestDownIndex = function(n) { return undefined; }

// Get the max value in the sequence.
NumberSequence.prototype.getMax = function() { return undefined; }

// Get the index of the max value in the sequence.
NumberSequence.prototype.getMaxIndex = function() { return -1; }

// Passes in unique parameters to the sequence that can be used to configure it.
NumberSequence.prototype.config = function() {}

// Publish the class.
global.NumberSequence = NumberSequence;

})(this);
