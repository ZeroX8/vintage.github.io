function lerp(start, end, amount) {
    return amount * (end - start) + start;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function floor(val) {
    return Math.floor(val);
}

function ceil(val) {
    return Math.ceil(val);
}

function max(begin, end) {
    if (begin == end) return begin;
    if (begin > end) return begin;
    if (end > begin) return end;
    return null;
}

function min(begin, end) {
    if (begin == end) return begin;
    if (begin < end) return begin;
    if (end < begin) return end;
    return null;
}

function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}