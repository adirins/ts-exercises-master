/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds % 3600 / 60);
    let secs = (seconds % 60);

    let clock = [hours, minutes, secs]
        .map(num => num.toString().padStart(2, '0'))
        .join(`:`)
        .replace(`24`, `00`) // wtf :)

    return clock

}

export { digitalClock };