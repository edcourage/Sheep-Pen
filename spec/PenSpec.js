describe("Pen", function() {
  var pen;
  var sheep_1;
  var sheep_2;

  beforeEach(function(){
    pen = new Pen;
    sheep_1 = jasmine.createSpyObj('sheep',{name:"Daisy"});
    sheep_2 = jasmine.createSpyObj('sheep',{name:"Phil"});
  })

  describe("#putSheepInPen", function() {

    it("I can put sheep in the pen", function(){

      pen.putSheepInPen(sheep_1);
      expect(pen.sheepInPen()).toContain("Daisy" );
    });

    it("I can put multiple sheep in pen", function() {
      pen.putSheepInPen(sheep_1);
      pen.putSheepInPen(sheep_2);
      expect(pen.sheepInPen()).toContain("Daisy");
      expect(pen.sheepInPen()).toContain("Phil");
    });
  });

  describe("#sheepInPen", function() {
    it("I can see the names of sheep in the pen", function(){
      pen.putSheepInPen(sheep_1);
      pen.putSheepInPen(sheep_2);
      expect(pen.sheepInPen()).toEqual("Daisy\nPhil");
    });
  });
});
