import { Stack } from "../stack.mjs"
/**
 * 
 * @param {string} str 
 */
export function isBalanced(str) {
  /** @type {Stack<string>} */
  const stack = new Stack()
  const closedBracketMap = {
    ']': '[',
    '}': '{',
    ')': '('
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const isClosedBracket = Object.keys(closedBracketMap).includes(char)
    const isOpenBracket = Object.values(closedBracketMap).includes(char)
    if (isOpenBracket) {
      stack.push(char)
    } else if (isClosedBracket && stack.peek() === closedBracketMap[char]) {
      stack.pop()
    } else if (isClosedBracket) {
      return false
    }
  }
  return stack.isEmpty()
}