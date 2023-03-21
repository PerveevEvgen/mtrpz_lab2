"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var list = new list_1.LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(6);
list.add(7);
list.add(8);
console.log(list.toArray()); // [1,2,3,4,5,6,6.7,8]
list.display();
console.log(list.findFirst(6)); //5
console.log(list.findLast(6)); //2
console.log(list.length()); //9
list.reverse();
console.log(list.toArray()); //[8,7,6,6,5,4,3,2,1]
console.log(list.get(1)); //7
list.clear();
console.log(list.toArray()); //[]
var list2 = new list_1.LinkedList();
list2.add(1);
list2.add(2);
list2.add(3);
list2.add(4);
console.log("list2:");
console.log(list2.toArray()); //[1,2,3,4]
list2.delete(0);
list2.delete(1);
console.log(list2.toArray()); //[2,4]
console.log("newList");
var newList = list2.copy();
console.log(newList.toArray());
