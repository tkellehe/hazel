(function(global, NumberSequence){

// The main interface.
var NumberLoader = {
  _sequences: {}
};

// Loads a NumberSequence.
NumberLoader.load = function(name) {
  return false;
}

// Checks to see a NumberSequence can even be loaded.
NumberLoader.has = function(name) {
  return false;
}

// Finds the NumberSequence specified and will create a default one if cannot.
NumberLoader.get = function(name) {
  return new NumberSequence();
}

// Publish the number loader interface.
global.NumberLoader = NumberLoader;

})(this, this.NumberSequence);
