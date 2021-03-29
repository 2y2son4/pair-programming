"use strict";

const addPear = () => {
  pearBasket.actualValue += 1;
};

const pearBasket = {
  maxValue: 100,
  minValue: 1,
  actualValue: 27,
  initialValue: 42,
  addPear: () => {
    pearBasket.actualValue += 1;
  },
  removePear: () => {
    pearBasket.actualValue -= 1;
  },
  getActualPears: function () {
    return pearBasket.actualValue ;
  },
  restoreInitialValue: function () {
    pearBasket.actualValue = pearBasket.initialValue;
  },
};

pearBasket.addPear()
pearBasket.addPear()
pearBasket.addPear()
pearBasket.removePear()
pearBasket.restoreInitialValue()

console.log(pearBasket.getActualPears());

