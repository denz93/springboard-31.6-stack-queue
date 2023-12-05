import {describe, test, expect, beforeEach} from '@jest/globals';
import { BrowserNavigation } from './browser-navigation.mjs';
describe('brwoser navigation', () => {
  /** @type {BrowserNavigation} */
  let browser = new BrowserNavigation()
  beforeEach(() => {
    browser = new BrowserNavigation()
  })
  test('go to a url', () => {
    expect(browser.go('test')).toBe('test')
  })

  test('back', () => {
    browser.go('test')
    expect(browser.currentUrl).toBe('test')
    browser.go('test2')
    browser.back()
    expect(browser.currentUrl).toBe('test')
  })

  test('forward', () => {
    browser.go('test')
    browser.go('test2')
    browser.go('test3')
    browser.back()
    browser.forward()
    expect(browser.currentUrl).toBe('test3')
  })

  test('can not go back', () => {
    expect(browser.back()).toBe(undefined)
    browser.go('test')
    expect(browser.back()).toBe(undefined)
  })

  test('clear forward queue', () => {
    browser.go('test')
    browser.go('test2')
    browser.back()
    browser.go('test3')
    browser.forward()
    expect(browser.currentUrl).toBe('test3')
  })
})