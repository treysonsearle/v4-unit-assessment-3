  
  //FOR CLOSURES
  
  //CLOSURES #1//
  
  //write a function called myFunc. Inside the function, create a variable and another function. Call the variable myNum and set it to a number. Call the function getSecretNumber -- it should return myNum.
  
  function myFunc() {
    const myNum = 4
    function getSecretNumber() {
      return myNum
    }
  }
  
  //Now create a variable called secretNumber. Its value should be the invocation of myFunc.
  
  const secretNumber = myFunc()
  
  //What other variable should secretNumber be equal to?
  
  
  
  //CLOSURE #2//
  
  //Write a function called lightSwitch. It will return an inner function.
  //Create a variable inside lightSwitch called isTheLightOn and set its initial value to the boolean false. 
  //Write a function called flipTheSwitch inside lightSwitch. 
    //The function should invert the value of isTheLightOn and return a string. 
    //If the light is on (true), the string should be 'The light is on'
    //And if the light is off (false), the string should be 'The light is off'. 
  //The lightSwitch function should return flipTheSwitch.
  
  function lightSwitch() {
    let isTheLightOn = false
  
    function flipTheSwitch() {
      isTheLightOn = !isTheLightOn
      let str = ''
      isTheLightOn ? str = 'The light is on' : str = 'The light is off'
      return str
    }
  
    // without the string, just true or false, which might be easier to test 
    // function flipTheSwitch() {
    //   isTheLightOn = !isTheLightOn
    //   return isTheLightOn
    // }
  
    return flipTheSwitch
  }
  
  //Create a variable called kitchenSwitch whose value is the invocation of lightSwitch.
  
  const kitchenSwitch = lightSwitch()
  
  //Invoke kitchenSwitch.
  
  // kitchenSwitch()
  
  //Create a variable called bathroomSwitch whose value is the invocation of lightSwitch. 
  
  const bathroomSwitch = lightSwitch()
  
  //Invoke bathroomSwitch twice.
  
  bathroomSwitch()
  bathroomSwitch()
  
  
  
  //MODULE PATTERN
  //thinking a plant on that's basically an incrementer, decrementer
  //one that controls an array of things. like a product list or something.
  
  // function counter() {
  //     var a = 0;
  //     return {
  //         inc: function() { ++a; },
  //         dec: function() { --a; },
  //         get: function() { return a; },
  //         reset: function() { a = 0; }
  //     }
  // }
  
  function plantTracker() {
    let plant = 'fern'
    let height = 16
  
    function privateFunction() {
      return `This is a ${plant} plant that is ${height} inches tall.`
    }
  
    function addToHeight() {
      return height++
    }

    function subtractFromHeight() {
        return height--
    }
  
    return {
      readInfo: () => {
        privateFunction()
      },
      waterPlant: () => {
        addToHeight()
        return `${plant} is ${height} inches tall.`
      },
      prunePlant: () => {
        subtractFromHeight()
        return `${plant} is ${height} inches tall.`
      }
    }
  }

  function inventory() {
      let products = []

      return {
          readProducts: () => {
              return products
          },
          addToProducts: item => {
            products.push(item)
          },
          deleteFromProducts: item => {
            let index = products.findIndex(product => product === item)
            products.splice(index, 1)
          }
      }
  }