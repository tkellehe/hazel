(function(global, NumberSequence){

// The main interface.
var SequenceLoader = {
  _sequences: {}
};

var parent = document.getElementsByTagName('script');
parent = parent[parent.length-1].parentNode;
  
// Loads a NumberSequence.
SequenceLoader.load = function(name) {
  // get some kind of XMLHttpRequest
  var xhrObj = createXMLHTTPObject();
  // open and send a synchronous request
  xhrObj.open('GET', "https://tkellehe.github.io/hazel/src/sequences/" + name + ".js", false);
  xhrObj.send('');
  
  if(!xhrObj.responseText) return false;
  
  // add the returned content to a newly created script tag
  var se = document.createElement('script');
  se.type = "text/javascript";
  se.text = xhrObj.responseText;
  parent.appendChild(se);
  return true;
}

// Checks to see a NumberSequence can even be loaded.
SequenceLoader.has = function(name) {
  return SequenceLoader._squences[name] !== undefined;
}

// Finds the NumberSequence specified and will create a default one if cannot.
SequenceLoader.get = function(name) {
  if(SequenceLoader.has(name)) {
    return SequenceLoader._squences[name];
  } else {
    return new NumberSequence();
  }
}

// Publish the sequence loader interface.
global.SequenceLoader = SequenceLoader;

})(this, this.NumberSequence);
