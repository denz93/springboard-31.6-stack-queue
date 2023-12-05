/** 
 * @class
 * @template TData
 */
export class Deque {
  constructor() {
    /** @type {TData[]} */
    this.queue = [];
  }

  /**
   * @param {TData} item
   */
  push(item) {
    this.queue.push(item);
  }

  /**
   * 
   * @param {TData} item 
   */
  pop(item) {
    return this.queue.pop();
  }

  shift() {
    return this.queue.shift();
  }

  /**
   * 
   * @param {TData} item 
   */
  unshift(item) {
    this.queue.unshift(item)
  }

  size() {
    return this.queue.length
  }
}