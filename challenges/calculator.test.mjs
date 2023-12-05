import {describe, test, expect, beforeEach} from '@jest/globals';
import { calc } from "./calculator.mjs";

describe('calculator', () => {
  test('+ 1 2', () => {
    expect(calc('+ 1 2')).toBe(3)
  })
  test('+ 9 * 2 3', () => {
    expect(calc('+ 9 * 2 3')).toBe(15)
  })
  test('- 1 2', () => {
    expect(calc('- 1 2')).toBe(-1)
  })
  test('/ 6 2', () => {
    expect(calc('/ 6 2')).toBe(3)
  })
})