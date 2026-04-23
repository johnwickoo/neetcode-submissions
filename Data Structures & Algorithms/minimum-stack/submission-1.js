class MinStack {
    constructor() {
        this.storage = []
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.storage.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.storage.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.storage[this.storage.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.storage)
    }
}
