var brands = ["Apple", "SamSung", "Oppo", "Vivo", 90000, 80000, 40000, 50000];

console.log(brands);

console.log(brands[2]);
console.log(brands[6]);

//Adding new Element in the array at last position

brands.push("Hyderabad");
brands.push(999999);
console.log(brands);

//Adding element at first position
brands.unshift(true);
brands.unshift("Delhi");
console.log(brands);

//remove last element from array
brands.pop();
brands.pop();
brands.pop();
console.log(brands);

//remove elements from starting position of array
brands.shift();
brands.shift();
brands.shift();
console.log(brands);

console.log(brands.length);
