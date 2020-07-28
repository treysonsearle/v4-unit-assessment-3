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
// describe('Skills Check 3', function () {
//   describe('Problem 1 - myName', function () {
//     it('myName variable should exist', function () {
//       expect(myName).toBeDefined()
//     })
//     it('should be the correct data type', function () {
//       expect(typeof myName).toBe('string')
//     })
//   })
// })

describe(`Skills Check 3`, () => {

  describe(`Problem 1 - Character class`, () => {
    it(`Character class should exist`, () => {
      expect(Character).toBeDefined()
    })
    it(`sets properties in the contrsuctor`, () => {
      let char = new Character(`Luigi`, `human`)
      expect(char.name).toBe(`Luigi`)
      expect(char.type).toBe(`human`)
    })
    it(`getInfo should be a function`, () => {
      let char = new Character(`Luigi`, `human`)
      expect(typeof char.getInfo).toBe(`function`)
    })
    it(`getInfo should return the correct string`, () => {
      let char = new Character(`Luigi`, `human`)
      expect(char.getInfo()).toBe(`This is a human character named Luigi.`)
    })
  })

  describe(`Problem 2 - NPC class`, () => {
    it(`NPC class should exist`, () => {
      expect(NPC).toBeDefined()
    })
    it(`sets properties in the constructor`, () => {
      let npc = new NPC(`Agnona`, `dwarf`, `tavern`, `What'll it be?`)
      expect(npc.name).toBe(`Agnona`)
      expect(npc.type).toBe(`dwarf`)
      expect(npc.location).toBe(`tavern`)
      expect(npc.phrase).toBe(`What'll it be?`)
    })
    it(`dialogue should be a function`, () => {
      let npc = new NPC(`Agnona`, `dwarf`, `tavern`, `What'll it be?`)
      expect(typeof npc.dialogue).toBe(`function`)
    })
    it(`dialogue should return the correct string`, () => {
      let npc = new NPC(`Agnona`, `dwarf`, `tavern`, `What'll it be?`)
      expect(npc.dialogue()).toBe(`Agnona: What'll it be?`)
    })
    it(`ralph exists and contains correct values`, () => {
      expect(ralph).toBeDefined()
      expect(ralph.name).toBe(`Ralph`)
      expect(ralph.type).toBe(`human`)
      expect(ralph.location).toBe(`Niceland`)
      expect(ralph.phrase).toBe(`I'm gonna wreck it!`)
    })
    it(`ralph's info, dialogue, and location variables contain the correct values`, () => {
      expect(ralphsInfo).toBe(`This is a human character named Ralph.`)
      expect(ralphsDialogue).toBe(`Ralph: I'm gonna wreck it!`)
      expect(ralphsLocation).toBe(`Niceland`)
    })
  })

  describe('Problem 3 - Player class', () => {
    it(`Player class should exist`, () => {
      expect(Player).toBeDefined()
    })
    it(`sets properties in the constructor`, () => {
      let player = new Player('Spader', 'Cloran', 100, 100)
      expect(player.name).toBe('Spader')
      expect(player.type).toBe('Cloran')
      expect(player.healthLevel).toBe(100)
      expect(player.attackLevel).toBe(100)
      expect(player.defend).toBeDefined()
      expect(typeof player.defend).toBe('function')
    })
    it(`aang and ozai should exist and contain the correct information`, () => {
      expect(aang).toBeDefined()
      expect(aang.name).toBe('Aang')
      expect(aang.type).toBe('airbender')
      expect(aang.healthLevel).toBe(100)
      expect(aang.attackLevel).toBe(100)
      expect(ozai).toBeDefined()
      expect(ozai.name).toBe('Ozai')
      expect(ozai.type).toBe('firebender')
      expect(ozai.attackLevel).toBe(0)
    })
    it(`battle should exist and have the correct value`, () => {
      expect(battle).toBeDefined()
      expect(battle).toBe(`Ozai has been defeated!`)
    })
  })

  describe(`Problem 4 - Hero class`, () => {
    it(`Hero class should exist`, () => {
      expect(Hero).toBeDefined()
    })
    it(`sets properties in the constructor`, () => {
      let hero = new Hero(`Superman`, `Kryptonian`, 100, 100)
      expect(hero.name).toBe(`Superman`)
      expect(hero.type).toBe(`Kryptonian`)
      expect(hero.healthLevel).toBe(100)
      expect(hero.attackLevel).toBe(100)
      expect(typeof hero.superPowers).toBe(`object`)
    })
    it(`fireSpitter should exist and contain the correct values`, () => {
      expect(fireSpitter).toBeDefined()
      expect(fireSpitter.name).toBe('Fire Spitter')
      expect(fireSpitter.type).toBe('dragon')
      expect(fireSpitter.healthLevel).toBe(5000)
      expect(fireSpitter.attackLevel).toBe(5000)
    }) 
    it(`fireSpitter should have three super powers`, () => {
      expect(fireSpitter.superPowers.length).toBe(3)
    })
    it(`fireSpitterAttack should use 'spitting fire' and match given string`, () => {
      expect(fireSpitterAttack).toBe(`Fire Spitter used spitting fire!`)
    })
  })
})
