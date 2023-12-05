import { Stack } from "../stack.mjs"

/**
 * 
 * @param {string} str 
 */
export function calc(str) {
  const operands = str.split(' ')
  const stack = new Stack()
  for (let i = operands.length-1; i >=0; i--) {
    const char = operands[i]
    const isOperator = ['+', '-', '*', '/'].includes(char)
    if (isOperator) {
      const firstOperand = stack.pop()
      const secondOperand = stack.pop()
      const result = eval(`${firstOperand}${char}${secondOperand}`)
      stack.push(result)
    } else {
      stack.push(char)
    }
  }
  return stack.pop()
}