// ================== CLOSURE ===============

function closure() {
  let count = 0;

  function increment() {
    count++;
    console.log("count:", count);
  }

  return increment;
}

// const instance1 = closure();

// instance1(); // 1
// instance1(); // 2
// instance1(); // 3

// const instance2 = closure();
// instance2(); // 1

function car() {
  let carName = "";

  function getCarName() {
    return carName;
  }

  function setCarName(_carName) {
    carName = _carName;
  }

  return {
    getCarName,
    setCarName,
  };
}

// const vf5Obj = car();
// vf5Obj.setCarName("Vinfast 5");
// console.log("vf5Obj.getCarName()", vf5Obj.getCarName());

// const vf6Obj = car();
// vf6Obj.setCarName("Vinfast 6");
// console.log("vf6Obj.getCarName()", vf6Obj.getCarName());

// Math.random() // is using closure;

// ============================ CALLBACK ===================

function alert() {
  console.log("Hien thi thong bao");
}

function getData() {
  console.log("Get Data");
}

function sum(a, b, callback) {
  if (typeof callback === "function") {
    callback();
  }
  return a + b;
}

// sum(4, 5, alert);
// sum(12, 32, getData);
// sum(4, 5, 6);

function alertTimeout(timeout, callback) {
  setTimeout(() => {
    console.log("Alert timeout");
    callback();
  }, timeout);
}

alertTimeout(0, getData);

// ====================== DE QUY ==============

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5));
