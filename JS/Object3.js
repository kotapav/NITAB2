var student = {
  name: "NIT",
  address: {
    city: "Hyd",
    getState: function () {
      return "TS";
    },
  },
};

console.log(student.address.getState());
