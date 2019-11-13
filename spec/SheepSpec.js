describe("Sheep", function() {
  describe("sheepsName", function() {
    it("sheeps needs a name barrr", function(){
      var daisyTheSheep = new Sheep('Daisy')
      expect(daisyTheSheep.name()).toEqual('Daisy')
    })
  })
})
