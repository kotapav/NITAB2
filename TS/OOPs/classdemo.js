var Student = /** @class */ (function () {
    function Student() {
        this.sname = "Rahul Varma";
        this.scity = "Hyderabad";
        this.sphone = 999999999;
    }
    Student.prototype.displayData = function () {
        console.log(this.sname, this.scity, this.sphone);
    };
    Student.prototype.changeData = function () {
        this.sname = "Sneha";
        this.scity = "Delhi";
        this.displayData;
    };
    return Student;
}());
var s1 = new Student();
s1.displayData();
var s2 = new Student();
s2.displayData();
s1.sname = "Sneha Reddy";
s2.sname = "NIT";
console.log("------------------------------");
s1.displayData();
s2.displayData();
