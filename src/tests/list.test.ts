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
      expect(linkedList.toArray()).toEqual([1,2]);
    });
  });

  //   describe("findFirst", () => {
  //     test("return index of the first element", () => {
  //       linkedList.add(1);
  //       linkedList.add(2);
  //       linkedList.add(1);
  //       expect(linkedList.findFirst(1)).toBe(0);
  //       expect(linkedList.findFirst(2)).toBe(1);
  //       expect(linkedList.findFirst(3)).toBe(-1);
  //     });
  //   });

  //   describe("findLast", () => {
  //     test("should return the index of the last element that matches the given data", () => {
  //       linkedList.add(1);
  //       linkedList.add(2);
  //       linkedList.add(1);
  //       expect(linkedList.findLast(1)).toBe(2);
  //       expect(linkedList.findLast(2)).toBe(1);
  //       expect(linkedList.findLast(3)).toBe(-1);
  //     });
  //   });

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
