let arr = [1, 2, 3];

console.log("Initial Array:", arr);

let removedItem1 = arr.push(4); // arr becomes [1, 2, 3, 4]
console.log("After push(4):", arr);

let removedItem2 = arr.unshift(0); // arr becomes [0, 1, 2, 3, 4]
console.log("After unshift(0):", arr);

let removedItem3 = arr.pop(); // arr becomes [0, 1, 2, 3]
console.log("After pop():", arr);

let removedItem4 = arr.shift(); // arr becomes [1, 2, 3]
console.log("After shift():", arr);
