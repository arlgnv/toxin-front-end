if (window.NodeList) {
  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (!NodeList.prototype.reduce) {
    NodeList.prototype.reduce = Array.prototype.reduce;
  }

  if (!NodeList.prototype.map) {
    NodeList.prototype.map = Array.prototype.map;
  }

  if (!NodeList.prototype.every) {
    NodeList.prototype.every = Array.prototype.every;
  }
}
