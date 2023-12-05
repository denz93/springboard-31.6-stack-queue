import { describe, test, expect, beforeEach } from '@jest/globals';
import { Stack } from "./stack.mjs";

describe('stack', () => {
  /** @type {Stack<string>} */
  let stack
  beforeEach(() => {
    stack = new Stack()
  })
  test('stack is empty', () => {
    expect(stack.isEmpty()).toBe(true)
  })
  test('push', () => {
    stack.push('test')
    stack.push('test2')
    expect(stack.isEmpty()).toBe(false)
    expect(stack.pop()).toBe('test2')
    expect(stack.pop()).toBe('test')
    expect(stack.isEmpty()).toBe(true)
  })
  test('pop empty stack', () => {
    expect(stack.pop()).toBe(undefined)
  })
  test('peek', () => {
    stack.push('test')
    stack.push('test2')
    expect(stack.peek()).toBe('test2')
    expect(stack.isEmpty()).toBe(false)
    expect(stack.pop()).toBe('test2')
    expect(stack.peek()).toBe('test')
    expect(stack.isEmpty()).toBe(false)
    expect(stack.pop()).toBe('test')
    expect(stack.isEmpty()).toBe(true)
  })
})