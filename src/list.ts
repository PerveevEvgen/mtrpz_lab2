export class LinkedList<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  toArray(): T[] {
    return this.list.slice();
  }

  length(): number {
    return this.list.length;
  }
  add(data: T): void {
    this.list.push(data);
  }

  insert(element: T, index: number): void {
    if (index < 0 || index > this.list.length) {
      throw new Error("Incorect index");
    }
    this.list.splice(index, 0, element);
  }

  delete(index: number): void {
    if (index < 0 || index > this.list.length) {
      throw new Error("Incorect index");
    }
    this.list.splice(index, 1);
  }

  deleteAll(data: T): void {
    const filtered = this.list.filter((x) => {
      return x != data;
    });
    this.list = filtered;
  }

  get(index: number): T {
    if (index < 0 || index > this.list.length) {
      throw new Error("Incorect index");
    }
    return this.list[index];
  }

  clone(): T[] {
    const clonedList = [...this.list];
    return clonedList;
  }

  reverse(): void {
    this.list = this.list.reverse();
  }

  findFirst(element: T): number {
    const index = this.list.indexOf(element);
    if (index != null) return index;
    return -1;
  }

  findLast(element: T): number {
    const arr = [...this.list];
    const reversedArr = arr.reverse();
    const index = reversedArr.indexOf(element);
    if (index !== -1) {
      return this.list.length - 1 - index;
    }
    return -1;
  }

  clear(): void {
    this.list = [];
  }
  extend(newList: LinkedList<T>): void {
    this.list = this.list.concat(newList.toArray());
  }
}
