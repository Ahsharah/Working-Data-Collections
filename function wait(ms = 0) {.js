function wait(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  function makePizza(toppings = []) {
    return new Promise(function(resolve, reject) {
      if (toppings.includes('pineapple')) {
        reject('Oh No!!!!!, Im good on 🍤 that!');
      }
      const bakeTime = 500 + (toppings.length * 200);
      setTimeout(function () {
        resolve(`Here is your pizza with the toppings ${toppings.join(', ')}`);
      }, bakeTime);
    });
  }
  
  function handleError(err) {
    console.log('Houston we have a problem');
    console.log(err);
  }
  
  async function done() {
    try {
      const endResult = await makePizza(['pineapple']);
      console.log(endResult);
    } catch (err) {
      handleError(err);
    }
  }
  
  async function run() {
    await done();
  }
  
  run();