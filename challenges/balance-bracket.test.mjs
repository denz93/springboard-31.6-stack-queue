import {describe, test, expect, beforeEach} from '@jest/globals';
import { isBalanced } from './balance-bracket.mjs';
describe('balance bracket', () => {
  test('balanced ()', () => {
    expect(isBalanced('(demo)')).toBe(true)
  })
  test('balanced []', () => {
    expect(isBalanced('[]')).toBe(true)
  })
  test('balanced {}', () => {
    expect(isBalanced('{(([])[{}])}')).toBe(true)
  })
  test('unbalanced [', () => {
    expect(isBalanced('[asd')).toBe(false)
  })
  test('unbalanced ]', () => {
    expect(isBalanced('asd]')).toBe(false)
  })
  test('unbalanced {', () => {
    expect(isBalanced('({)}')).toBe(false)
  })
  test('unbalanced )', () => {
    expect(isBalanced('(()()))')).toBe(false)
  })
})