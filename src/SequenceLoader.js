(function(global, NumberSequence){

// The main interface.
var SequenceLoader = {
  _sequences: {}
};

// Loads a NumberSequence.
SequenceLoader.load = function(name) {
  return false;
}

// Checks to see a NumberSequence can even be loaded.
SequenceLoader.has = function(name) {
  return false;
}

// Finds the NumberSequence specified and will create a default one if cannot.
SequenceLoader.get = function(name) {
  return new NumberSequence();
}

// Publish the sequence loader interface.
global.SequenceLoader = SequenceLoader;

})(this, this.NumberSequence);
