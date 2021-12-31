/*
* This program test stack class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-09
*/

class MrCoxallStack {
  private stack: number[] = []

  push (pushValue: number) {
    this.stack.push(pushValue)
  }

  showStack () {
    // this prints out the stack.
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }

  pop () {
    const returnValue = this.stack[this.stack.length - 1]
    const index = this.stack.indexOf(this.stack.length - 1, 0)
    this.stack.splice(index, 1)
    return returnValue
  }
}

const aStack = new MrCoxallStack()

console.log('First stack:')
aStack.showStack()

console.log('Add 100:')
aStack.push(100)
aStack.showStack()

console.log('Add 60:')
aStack.push(60)
aStack.showStack()

console.log('POP')
aStack.pop()
aStack.showStack()

console.log('\nDone.')
