import { Queue } from "../queue.mjs";
import { Stack } from "../stack.mjs";
import { Deque } from "../deque.mjs";
/**
 * 
 * @param {number} numOfPeople 
 * @param {number} skip 
 * @returns 
 */
export function findSurvivor(numOfPeople, skip) {
  /** @type {Deque<number>} */
  const people = new Deque()
  for (let i = numOfPeople; i > 0; i--) {
    people.push(i)
  }
  let counter = 1
  while (people.size() > 1) {
    if (counter === skip) {
      people.pop()
      counter = 1
    } else {
      people.unshift(people.pop())
      counter++
    }
  }
  return people.pop()
}