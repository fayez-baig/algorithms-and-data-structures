import LinkedList from '../linked-list'
import { EqualsFunction } from '../utils'

class Stack<T> implements Iterable<T> {
  private list: LinkedList<T>

  constructor() {
    this.list = new LinkedList()
  }

  /**
   * Returns size of stack - O(1)
   * @returns {number}
   */
  size(): number {
    return this.list.size()
  }

  /**
   * Returns true if stack is empty, false otherwise - O(1)
   * @returns {number}
   */
  isEmpty(): boolean {
    return this.list.isEmpty()
  }

  /**
   * Pushes element onto the stack - O(1)
   * @param {T} element - element to push on stack
   */
  push(element: T): void {
    this.list.addBack(element)
  }

  /**
   * Checks if value is in queue
   * Equals function must be supplied for non-primitive values.
   * @param {T} element  - element to search for
   * @param {EqualsFunction<T>} equalsFunction - optional
   * function to check if two items are equal
   * @returns {boolean}
   */
  contains(element: T, equalsFunction?: EqualsFunction<T>): boolean {
    return this.list.contains(element, equalsFunction)
  }

  /**
   * Pops an element off the stack - O(1)
   * @returns {T} - Element which was popped off
   */
  pop(): T {
    return this.list.removeBack()
  }

  /**
   * Peeks at the top most element on the stack - O(1)
   * @returns {T} - Topmost element
   */
  peek(): T {
    return this.list.peekBack()
  }

  /**
   * Deletes all elements in queue - O(1)
   */
  clear(): void {
    this.list.clear()
  }

  [Symbol.iterator](): Iterator<T> {
    return this.list[Symbol.iterator]()
  }
}

export default Stack
