/**
 * A simple Queue implementation in JavaScript.
 * Supports enqueue, dequeue, and peek operations.
 * @class Queue
 */
export default class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.tail - this.head == 0) {
      return false;
    }
    let item = this.queue[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.queue[this.head];
  }
}
