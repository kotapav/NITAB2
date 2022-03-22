var student = {
  name: "NIT",
  phn: 9999999,
  address: {
    city: {
      area1: "Ammerpet", //                  student.address.city.area1
      area2: "Hitech City",
    },
    State: "TS",
    Country: "India",
  },
};

// console.log(student.address.State);

// student.address.city = "Warangal";
// console.log(student);

console.log(student.address.Country);
console.log(student.address.city.area1);
