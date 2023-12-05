import { Queue } from "../queue.mjs";
import { Stack } from "../stack.mjs";

export class BrowserNavigation {

  constructor() {
    /** @type {Stack<string>} */
    this.history = new Stack();
    
    /** @type {Stack<string>} */
    this.undo = new Stack();

    this.currentUrl = undefined
  }

  /**
   * @param {string} url
   */
  go(url) {
    if (this.currentUrl)
      this.history.push(this.currentUrl)

    this.undo = new Stack()

    this.currentUrl = url
    return url
  }

  back() {
    if (!this.currentUrl) return 
    const url = this.history.pop()
    if (url) {
      this.undo.push(this.currentUrl)
      this.currentUrl = url
    }
  }

  forward() {
    const url = this.undo.pop()
    if (url) {
      this.history.push(this.currentUrl)
      this.currentUrl = url
    }
  }

}