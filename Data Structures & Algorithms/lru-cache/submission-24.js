class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.maxCapacity = capacity
        this.cache = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.cache.has(key)) {
            return -1
        }
        const getVal = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, getVal)
        return getVal
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size === this.maxCapacity) {
            const firstkey = this.cache.keys().next().value
            this.cache.delete(firstkey)
        }
        this.cache.set(key, value)
    }
}
