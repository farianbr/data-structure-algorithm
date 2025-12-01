/**
 * @method pop(): Boolean | any
 * @method push(item: any): Boolean
 * @method peak(): any
 * @method clear(): Boolean
 */


export default class Stack {
    constructor() {
        this.stack = []
        this.top = -1

    }

    push(item){
        this.stack.push(item)
        this.top++
        return true;
    }

    pop(){
        if(this.stack.length == 0){
            return false;
        }
        let result = this.stack[this.top]
        this.stack.pop();
        this.top--
        return result
    }

    peak(){
        if(this.top < 0){
            return []
        }
        return this.stack[this.top]
    }

    clear(){
        this.stack = []
        return true
    }
}

// const stack = new Stack()
// console.log(stack)
// console.log(stack.push(2))
// console.log(stack.push('farian'))
// console.log(stack.peak())
// console.log(stack.pop())
// console.log(stack.peak())