import {describe, test, expect, beforeEach} from '@jest/globals';
import { Queue } from "./queue.mjs";

describe('queue', () => {
  /** @type {Queue<string>} */
  let queue
  beforeEach(() => {
    queue = new Queue()
  })

  test('queue is empty', () => {
    expect(queue.isEmpty()).toBe(true)
  })

  test('enqueue', () => {
    queue.enqueue('test')
    queue.enqueue('test2')
    expect(queue.isEmpty()).toBe(false)
    expect(queue.dequeue()).toBe('test')
    expect(queue.dequeue()).toBe('test2')
    expect(queue.isEmpty()).toBe(true)
  })

  test('dequeue empty queue', () => {
    expect(queue.dequeue()).toBe(undefined)
  })
})