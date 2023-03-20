export class LinkedList<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  toArray(): T[] {
    return this.list.slice();
  }

  length(): number {//1
    return this.list.length;
  }
}
