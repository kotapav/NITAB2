var Student1 = /** @class */ (function () {
    //   constructor() {
    //         this.sname = "Rahul Verma"
    //         this.scity = "Hyd"
    //         this.sphone = 99999999
    //   }
    function Student1(name, city, phone) {
        this.sname = name;
        this.scity = city;
        this.sphone = phone;
    }
    Student1.prototype.displayData = function () {
        console.log(this.sname, this.scity, this.sphone);
    };
    Student1.prototype.changeData = function () {
        this.sname = "Sneha";
        this.scity = "Delhi";
        this.displayData;
    };
    return Student1;
}());
var s1 = new Student1("Rahul Verma", "Delhi", 9999999999);
s1.displayData();
s1.sphone = 666666666;
var s2 = new Student1("Sneha Reddy", "Vizag", 88888888);
s2.displayData();
s1.displayData();
