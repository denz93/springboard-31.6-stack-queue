import { Stack } from "../stack.mjs";

/**
 * 
 * @param {string} str 
 */
export function reverseString(str) {
  const stack = new Stack()
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
  }
  let reverse = ''
  while (!stack.isEmpty()) {
    reverse += stack.pop()
  }
  return reverse
}