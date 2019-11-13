describe("Pen", function() {
  var pen;
  var sheep_1;
  var sheep_2;

  beforeEach(function(){
    pen = new Pen;
    sheep_1 = jasmine.createSpy('sheep');
    sheep_2 = jasmine.createSpy('sheep');

  })
  describe("#putSheepInPen", function() {

    it("I can put sheep in the pen", function(){
      var pen = new Pen;
      pen.putSheepInPen(sheep_1);
      expect(pen.sheepInPen()).toContain(sheep_1 );
    });

    it("I can put multiple sheep in pen", function() {
      pen.putSheepInPen(sheep_1);
      pen.putSheepInPen(sheep_2);
      expect(pen.sheepInPen()).toContain(sheep_1);
      expect(pen.sheepInPen()).toContain(sheep_2);
      
    })




  });









});
