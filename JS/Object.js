var student = {
  name: "Rahul",
  city: "Hyderabad",
  phone: 99999999,
  isPlaced: false,
};

console.log(student); //4

//Accessing the property

// console.log(student.city);
// console.log(student.phone);

//Insert new property
student.email = "Rahul@gmail.com";
student.last = "Verma";
console.log(student); // 5

//Update Property

student.city = "Mumbai";
console.log(student);
//delete Property

delete student.isPlaced;
console.log(student);
