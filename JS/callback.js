function fnAdd(num1, num2, f) {
  f();
  var x = num1;
  var y = num2;
  f();

  var results = x + y;
  console.log(results);
  f();
}
fnAdd(100, 50, function () {
  console.log("I am callback function");
});
