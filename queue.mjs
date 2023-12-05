/**
 * @class
 * @template TData
 */
export class Queue {
  constructor() {
    /** @type {TData[]} */
    this.queue = [];
  }
  /**
   * @param {TData} item
   */
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
