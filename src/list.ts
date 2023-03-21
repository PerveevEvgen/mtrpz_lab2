export class ListNode<T> {
  data: T;
  next: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
export class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data: T): void {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next as ListNode<T>;
      }
      current.next = newNode;
    }
    newNode.next = this.head;
    this.size++;
  }

  display(): void {
    if (!this.head) {
      console.log("Список пуст");
      return;
    }
    console.log("Зв'язний список:");
    let current = this.head;
    do {
      console.log(`${current.data}->${current.next?.data}`);
      current = current.next as ListNode<T>;
    } while (current !== this.head);
  }

  toArray(): T[] {
    const result: T[] = [];
    if (!this.head) {
      return result;
    }
    let current = this.head;
    do {
      result.push(current.data);
      current = current.next as ListNode<T>;
    } while (current !== this.head);
    return result;
  }

  length(): number {
    let count = 0;
    if (!this.head) {
      return count;
    }
    let current = this.head;
    do {
      count++;
      current = current.next as ListNode<T>;
    } while (current !== this.head);
    return count;
  }

  reverse(): void {
    if (!this.head || this.size === 1) {
      return;
    }
    let prev: ListNode<T> | null = null;
    let current = this.head;
    let next = this.head.next as ListNode<T>;
    do {
      current.next = prev;
      prev = current;
      current = next;
      next = current.next as ListNode<T>;
    } while (current !== this.head);
    current.next = prev;
    this.head = prev;
  }

  clear(): void {
    this.head = null;
    this.size = 0;
  }

  get(index: number): T {
    if (index < 0 || index >= this.size) {
      throw new Error("Некоректне значення позиції");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.data;
  }

  findFirst(element: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  findLast(element: T): number {
    let current = this.head;
    let lastIndex = -1;
    let index = 0;
    while (current && index <= this.size) {
      if (current.data === element) {
        lastIndex = this.size - index - 1;
      }
      current = current.next;
      index++;
    }
    return lastIndex;
  }

  copy(): LinkedList<T> {
    const newList = new LinkedList<T>();
    if (!this.head) {
      return newList;
    }

    let current = this.head;
    do {
      newList.add(current.data);
      current = current.next as ListNode<T>;
    } while (current !== this.head);

    return newList;
  }
  deleteAll(value: T): void {
    // Перевірка чи список порожній
    if (!this.head) {
      return;
    }

    let current: ListNode<T> | null = this.head;
    let prev: ListNode<T> | null = null;

    // Прохід по списку і видалення елементів з заданим значенням
    while (current) {
      if (current.data === value) {
        if (!prev) {
          // Якщо значення в першому елементі
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
      } else {
        prev = current;
      }
      current = current.next;
      if (current === this.head) {
        break;
      }
    }
  }

  delete(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    if (!this.head) {
      return null;
    }

    let current = this.head as ListNode<T>;
    let previous: ListNode<T> | null = null;

    if (index === 0) {
      if (this.size === 1) {
        this.head = null;
      } else {
        while (current.next !== this.head) {
          current = current.next as ListNode<T>;
        }
        this.head = this.head.next;
        current.next = this.head;
      }
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next as ListNode<T>;
        if (!current) {
          return null;
        }
      }
      previous!.next = current.next;
    }

    this.size--;
    return current.data;
  }

  insert() {}
}
