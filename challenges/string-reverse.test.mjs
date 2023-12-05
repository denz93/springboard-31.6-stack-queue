import { describe, test, expect, beforeEach } from '@jest/globals';
import { reverseString } from './string-reversal.mjs';
describe('string reversal', () => {
  test('regular string', () => {
    expect(reverseString('test')).toBe('tset')
  })
  test('empty string', () => {
    expect(reverseString('')).toBe('')
  })
})