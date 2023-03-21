import { LinkedList } from "../list";
describe("BaseLinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  describe("add", () => {
    test("add new element", () => {
      linkedList.add(1);
      expect(linkedList.toArray()).toEqual([1]);
      linkedList.add(2);
      expect(linkedList.toArray()).toEqual([1]);
    });
  });

  describe("extend", () => {
    test("should extend the list", () => {
      linkedList.add(1);
      linkedList.add(2);
      const newList = new LinkedList<number>();
      newList.add(66);
      linkedList.extend(newList);
      expect(linkedList.toArray()).toEqual([1, 2, 66]);
    });
  });

  describe("deleteAll", () => {
    test("delete all elements that match the given data", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(2);
      linkedList.deleteAll(2);
      expect(linkedList.toArray()).toEqual([1]);
    });
  });

  describe("insert", () => {
    test("insert new element at given index", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.insert(3, 1);
      expect(linkedList.toArray()).toEqual([1, 3, 2]);
      linkedList.insert(4, 0);
      expect(linkedList.toArray()).toEqual([4, 1, 3, 2]);
    });
    test("throw error if index is out of bounds", () => {
      expect(() => linkedList.insert(1, -1)).toThrow();
      expect(() => linkedList.insert(1, 10)).toThrow();
    });
  });

  describe("delete", () => {
    test("delete element at given index", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.delete(1);
      expect(linkedList.toArray()).toEqual([1, 3]);
      linkedList.delete(0);
      expect(linkedList.toArray()).toEqual([3]);
    });

    test("throw error if index is out of bounds", () => {
      expect(() => linkedList.delete(-1)).toThrow();
      expect(() => linkedList.delete(10)).toThrow();
    });
  });

  describe("findFirst", () => {
    test("return index of the first element", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(1);
      expect(linkedList.findFirst(1)).toBe(0);
      expect(linkedList.findFirst(2)).toBe(1);
      expect(linkedList.findFirst(3)).toBe(-1);
    });
  });

  describe("findLast", () => {
    test("should return the index of the last element that matches the given data", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(1);
      expect(linkedList.findLast(1)).toBe(2);
      expect(linkedList.findLast(2)).toBe(1);
      expect(linkedList.findLast(3)).toBe(-1);
    });
  });

  describe("clear", () => {
    test("remove all elements", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.clear();
      expect(linkedList.toArray()).toEqual([]);
    });
  });

  describe("length", () => {
    test("return length", () => {
      linkedList.add(1);
      linkedList.add(2);
      expect(linkedList.length()).toEqual(2);
    });
  });
});
