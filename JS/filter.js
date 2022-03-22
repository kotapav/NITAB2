var studentMarks = [78, 98, 12, 34, 68, 34, 110, 198, 2, 6]; //20 --100

var filteredMarks = studentMarks.filter(function (element, index) {
  return element > 20 && element < 50;
});

console.log(filteredMarks);
