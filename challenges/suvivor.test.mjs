import {describe, test, expect, beforeEach} from '@jest/globals';
import { findSurvivor } from "./survivor.mjs";

describe('Josephus Survivor', () => {
  test('findSurvivor', () => {
    expect(findSurvivor(10, 3)).toBe(4)
    expect(findSurvivor(4, 3)).toBe(1) // 1 2 3 4

  })
})