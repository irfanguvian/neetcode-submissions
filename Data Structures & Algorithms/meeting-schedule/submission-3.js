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
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if(intervals.length == 0) {
            return true
        }
        
        intervals.sort((a,b) => a.start - b.start)
        let start = intervals[0].start
        let end = intervals[0].end

        for(let i  =1 ;i < intervals.length ; i++) {
            let startI = intervals[i].start
            let endI = intervals[i].end

            if(!(start < startI && end <= startI)) {
                return false
            }
            start = startI
            end = endI
        }

        return true
    }
}
