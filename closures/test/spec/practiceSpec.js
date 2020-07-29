//Helper Function
function arrayIncludes(arr, values) {
  let allGood = true
  for (let i = 0; i < values.length; i++) {
    if (!arr.includes(values[i])) {
      allGood = false
      break
    }
  }
  return allGood
}

function showTheValue(x) {
  return x
}

//Test Suite
describe(`Skills Check 3 - Closures`, () => {
  describe(`Problem 1 - myFunc`, () => {
    it(`myFunc should exist`, () => {
      expect(myFunc).toBeDefined()
    })
    it(`secretString should exist`, () => {
      expect(secretString).toBeDefined()
    })
    it(`should contain correct text`, () => {
      let stringTest = secretString()
      expect(stringTest).toEqual(`super secret string`)
    })
  })

  describe(`Problem 2 - lightSwitch`, () => {
    it(`lightSwitch should exist`, () => {
      expect(lightSwitch).toBeDefined()
    })
    it(`kitchenSwitch should exist`, () => {
      expect(kitchenSwitch).toBeDefined()
    })
    it(`kitchenSwitch should return the correct values`, () => {
      let kitchenTest = kitchenSwitch()
      expect(kitchenTest).toEqual(`The light is off`)
    })
    it(`bathroomSwitch should exist`, () => {
      expect(bathroomSwitch).toBeDefined()
    })
    it(`bathroomSwitch should return the correct value`, () => {
      let bathroomTest = bathroomSwitch()
      expect(bathroomTest).toEqual(`The light is on`)
    })
  })

  describe(`Problem 3 - plantTracker`, () => {
    let trackerTest = plantTracker()
    it(`plantTracker should exist`, () => {
      expect(plantTracker).toBeDefined()
    })
    it(`readInfo should exist and function properly`, () => {
      let readTest = trackerTest.readInfo()
      expect(readTest).toEqual(`This is a fern plant that is 12 inches tall.`)
    })
    it(`waterPlant should exist and function properly`, () => {
      let waterTest = trackerTest.waterPlant()
      expect(waterTest).toEqual(13)
    })
    it(`prunePlant should exist and function properly`, () => {
      let pruneTest = trackerTest.prunePlant()
      expect(pruneTest).toEqual(12)
    })
  })

  describe(`Problem 4 - inventory`, () => {
    it(`inventory should exist`, () => {
      expect(inventory).toBeDefined()
    })
    it(`shoes should exist`, () => {
      expect(shoes).toBeDefined()
    })
    it(`shoes should have one product in its array`, () => {
      let products = shoes.readProducts()
      expect(products.length).toEqual(1)
    })
  })
})
