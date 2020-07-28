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
describe('Skills Check 1', function () {
  describe('Problem 1 - myName', function () {
    it('myName variable should exist', function () {
      expect(myName).toBeDefined()
    })
    it('should be the correct data type', function () {
      expect(typeof myName).toBe('string')
    })
  })
})
