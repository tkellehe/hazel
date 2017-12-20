(function(global) {

// Main class for handling number sequences.
function NumberSequence(name) {
  this.name = (typeof name === "string") ? name : "undefined";
  this.isFinite = true;
}

// Gets a speficied index of the sequence.
NumberSequence.prototype.get = function(i) { return i; }

// Checks whether or not a number is in the sequence.
NumberSequence.prototype.is = function(n) { return false; }

// Gets the index of the number provided within the sequence where negative one means cannot be found.
NumberSequence.prototype.indexOf = function(n) { return -1; }

// Gets the closest number in the sequence to the number provided that is larger.
NumberSequence.prototype.closestUp = function(n) { return false; }

// Gets the index of the closest number in the sequence to the number provided that is larger.
NumberSequence.prototype.closestUpIndex = function(n) { return false; }

// Gets the closest number in the sequence to the number provided that is smaller.
NumberSequence.prototype.closestDown = function(n) { return false; }

// Gets the index of the closest number in the sequence to the number provided that is smaller.
NumberSequence.prototype.closestDownIndex = function(n) { return false; }

// Publish the class.
global.NumberSequence = NumberSequence;

})(this);
