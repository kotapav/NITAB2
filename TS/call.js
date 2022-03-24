var obj1 = {
  num3: 100,
  num4: 200,
};

var obj2 = {
  num3: 50,
};

var obj3 = {
  num3: 1000,
};

function fnAdd(num1, num2) {
  var x = num1;
  var y = num2;

  var r = x + y + this.num3;
  console.log(r);
}
// fnAdd(10, 10); // obj1
fnAdd.call(obj1, 10, 10);

// fnAdd(50, 50); // obj2
fnAdd.call(obj2, 50, 50);

// fnAdd(40, 56); //obj3
fnAdd.call(obj3, 2, 3);
