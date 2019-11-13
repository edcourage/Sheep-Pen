function Pen() {
  this._penArray = []
}

Pen.prototype.putSheepInPen = function(sheep) {
  this._penArray.push(sheep)
};

Pen.prototype.sheepInPen = function () {
  var listOfSheepName = []
  this._penArray.forEach(function(element) {
    listOfSheepName.push(element.name())
  })
  return listOfSheepName.join("\n")
};
