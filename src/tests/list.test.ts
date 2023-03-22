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
      expect(linkedList.toArray()).toEqual([1, 2]);
    });
  });

  describe("findFirst", () => {
    test("return index of the first element", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(1);
      expect(linkedList.findFirst(1)).toBe(0);
      expect(linkedList.findFirst(2)).toBe(1);
    });
  });

  describe("findLast", () => {
    test("return index of last element ", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(5);
      linkedList.add(6);
      linkedList.add(6);
      linkedList.add(7);
      linkedList.add(8);
      expect(linkedList.findLast(6)).toBe(2);
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
  });

  describe("clone", () => {
    test("should clone the list", () => {
      linkedList.add(1);
      linkedList.add(2);
      const clonedList = linkedList.copy();
      expect(clonedList.toArray()).toEqual([1, 2]);
    });
  });

  describe("deleteAll", () => {
    test("delete all elements that are equal to value", () => {
      const linkedList = new LinkedList<number>();
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.add(2);
      linkedList.add(5);
      linkedList.deleteAll(2);
      expect(linkedList.toArray()).toEqual([1, 3, 4, 5]);
    });
  });

  describe("insert", () => {
    test("insert new element at given index", () => {
      linkedList.add(1);
      linkedList.add(2);
      linkedList.add(3);
      linkedList.add(4);
      linkedList.insert(1, 8);
      expect(linkedList.toArray()).toEqual([1, 8, 2, 3, 4]);
    });

    test("should throw an error if the index is out of bounds", () => {
      expect(() => linkedList.insert(1, -1)).toThrow();
      expect(() => linkedList.insert(1, 10)).toThrow();
    });
  });
});
