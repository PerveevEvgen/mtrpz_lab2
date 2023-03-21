"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.ListNode = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this.next = null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.add = function (data) {
        var newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
        }
        newNode.next = this.head;
        this.size++;
    };
    LinkedList.prototype.display = function () {
        var _a;
        if (!this.head) {
            console.log("Список пуст");
            return;
        }
        console.log("Зв'язний список:");
        var current = this.head;
        do {
            console.log("".concat(current.data, "->").concat((_a = current.next) === null || _a === void 0 ? void 0 : _a.data));
            current = current.next;
        } while (current !== this.head);
    };
    LinkedList.prototype.toArray = function () {
        var result = [];
        if (!this.head) {
            return result;
        }
        var current = this.head;
        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);
        return result;
    };
    LinkedList.prototype.length = function () {
        var count = 0;
        if (!this.head) {
            return count;
        }
        var current = this.head;
        do {
            count++;
            current = current.next;
        } while (current !== this.head);
        return count;
    };
    LinkedList.prototype.reverse = function () {
        if (!this.head || this.size === 1) {
            return;
        }
        var prev = null;
        var current = this.head;
        var next = this.head.next;
        do {
            current.next = prev;
            prev = current;
            current = next;
            next = current.next;
        } while (current !== this.head);
        current.next = prev;
        this.head = prev;
    };
    LinkedList.prototype.clear = function () {
        this.head = null;
        this.size = 0;
    };
    LinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Некоректне значення позиції");
        }
        var current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    };
    LinkedList.prototype.findFirst = function (element) {
        var current = this.head;
        var index = 0;
        while (current) {
            if (current.data === element) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.findLast = function (element) {
        var current = this.head;
        var lastIndex = -1;
        var index = 0;
        while (current && index <= this.size) {
            if (current.data === element) {
                lastIndex = this.size - index - 1;
            }
            current = current.next;
            index++;
        }
        return lastIndex;
    };
    LinkedList.prototype.copy = function () {
        var newList = new LinkedList();
        if (!this.head) {
            return newList;
        }
        var current = this.head;
        do {
            newList.add(current.data);
            current = current.next;
        } while (current !== this.head);
        return newList;
    };
    LinkedList.prototype.extend = function () { };
    LinkedList.prototype.deleteAll = function () { };
    LinkedList.prototype.delete = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (!this.head) {
            return null;
        }
        var current = this.head;
        var previous = null;
        if (index === 0) {
            if (this.size === 1) {
                this.head = null;
            }
            else {
                while (current.next !== this.head) {
                    current = current.next;
                }
                this.head = this.head.next;
                current.next = this.head;
            }
        }
        else {
            for (var i = 0; i < index; i++) {
                previous = current;
                current = current.next;
                if (!current) {
                    return null;
                }
            }
            previous.next = current.next;
        }
        this.size--;
        return current.data;
    };
    LinkedList.prototype.insert = function () { };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
