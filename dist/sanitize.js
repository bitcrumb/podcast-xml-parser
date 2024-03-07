"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDuration = void 0;
/**
 * Converts a time string in the format of HH:MM:SS or a numerical string to seconds.
 * If the provided time is neither in the correct format nor a numerical value, returns undefined.
 *
 * @param time - The time value to be converted to seconds. Accepts any input.
 * @returns The converted time value in seconds or undefined if the provided time value is invalid.
 * @example
 *
 * convertToSeconds("12:34:56"); // Returns 45296
 * convertToSeconds("123456");   // Returns 123456
 * convertToSeconds("12:3456");  // Returns undefined
 */
function getDuration(time) {
    if (typeof time !== "string" && typeof time !== "number") {
        return undefined;
    }
    function isTimeFormat(value) {
        var timeRegex = /^(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        return timeRegex.test(value);
    }
    if (typeof time === "string") {
        if (isTimeFormat(time)) {
            var _a = time.split(":").map(function (part) { return parseInt(part); }), hours = _a[0], minutes = _a[1], seconds = _a[2];
            return hours * 3600 + minutes * 60 + seconds;
        }
        else if (!isNaN(Number(time))) {
            return parseInt(time);
        }
    }
    else if (typeof time === "number") {
        return time;
    }
    return undefined;
}
exports.getDuration = getDuration;
