"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.list = [];
    }
    LinkedList.prototype.toArray = function () {
        return this.list.slice();
    };
    LinkedList.prototype.length = function () {
        return this.list.length;
    };
    LinkedList.prototype.add = function (data) {
        this.list.push(data);
    };
    LinkedList.prototype.insert = function (element, index) {
        if (index < 0 || index > this.list.length) {
            throw new Error("Incorect index");
        }
        this.list.splice(index, 0, element);
    };
    LinkedList.prototype.delete = function (index) {
        if (index < 0 || index > this.list.length) {
            throw new Error("Incorect index");
        }
        this.list.splice(index, 1);
    };
    LinkedList.prototype.deleteAll = function (data) {
        var filtered = this.list.filter(function (x) {
            return x != data;
        });
        this.list = filtered;
    };
    LinkedList.prototype.get = function (index) {
        if (index < 0 || index > this.list.length) {
            throw new Error("Incorect index");
        }
        return this.list[index];
    };
    LinkedList.prototype.clone = function () {
        var clonedList = __spreadArray([], this.list, true);
        return clonedList;
    };
    LinkedList.prototype.reverse = function () {
        this.list = this.list.reverse();
    };
    LinkedList.prototype.findFirst = function (element) {
        var index = this.list.indexOf(element);
        if (index != null)
            return index;
        return -1;
    };
    LinkedList.prototype.findLast = function (element) {
        var arr = __spreadArray([], this.list, true);
        var reversedArr = arr.reverse();
        var index = reversedArr.indexOf(element);
        if (index !== -1) {
            return this.list.length - 1 - index;
        }
        return -1;
    };
    LinkedList.prototype.clear = function () {
        this.list = [];
    };
    LinkedList.prototype.extend = function (newList) {
        this.list = this.list.concat(newList.toArray());
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
