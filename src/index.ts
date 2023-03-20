import { LinkedList } from "./list";

const list = new LinkedList<number>();

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);
console.log(list.toArray()); // [1,2,3,4,5,6,7,8]

list.insert(2, 0);
console.log(list.toArray()); // [2,1,2,3,4,5,6,7,8]

list.deleteAll(2);
console.log(list.toArray()); // [1,3,4,5,6,7,8]

list.delete(0);
console.log(list.toArray()); // [3,4,5,6,7,8]

list.add(9);
list.add(10);
list.add(10);
console.log(list.findFirst(10)); //7
console.log(list.findLast(10)); //8

const secondList = new LinkedList<number>();
secondList.add(1);
list.extend(secondList);
console.log(list.toArray()); // [3,4,5,6,7,8,9,10,10,1]

console.log(list.get(1)); //4

console.log(list.length()); //10

list.reverse();
console.log(list.toArray()); //[1,10,10,9,8,7,6,5,4,3]

const clonedList = list.clone();
console.log(clonedList); //[1,10,10,9,8,7,6,5,4,3]

list.clear();
console.log(list.toArray()); // []
