/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length == 0) {
            return 0
        }    
        intervals.sort((a,b) => a.start - b.start)
        const mapStart = [intervals[0]]
        for(let i =1 ; i <intervals.length ; i++) {
            const currentTime = intervals[i]
            const oldTime = intervals[i - 1]
            if(!(oldTime.end <= currentTime.start)) {
                 let isHaveRoom = false
                for(let j = 0 ; j < mapStart.length ; j++) {
                    const currentRoom = mapStart[j]
                    // make sure end time suite to next schedule
                    if(currentRoom.end <= currentTime.start) {
                        isHaveRoom = true
                        mapStart[j] = currentTime
                        break
                    }
                }

                if(!isHaveRoom) {
                    mapStart.push(currentTime)
                }
            }
        }

        return mapStart.length
    }
}
