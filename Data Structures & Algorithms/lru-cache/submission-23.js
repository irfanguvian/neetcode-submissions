class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let res = -1
        if(this.map.has(key)) {
            res = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, res)
        }
        return res
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)) {
            this.map.delete(key);
        } else if(this.map.size == this.capacity) {
            const firstKey = this.map.keys().next().value;
            this.map.delete(firstKey);
        }

        this.map.set(key, value)
    }
}
