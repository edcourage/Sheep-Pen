function Pen() {
  this._penArray = []
}

Pen.prototype.putSheepInPen = function(sheep) {
  this._penArray.push(sheep)
};

Pen.prototype.sheepInPen = function () {
  return this._penArray

};
