"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gnomeSort = exports.randIndex = void 0;
function randIndex(length) {
    return (Math.floor(Math.random() * length));
}
exports.randIndex = randIndex;
function gnomeSort(arr) {
    let pos = 0;
    let temp = arr;
    while (pos < temp.length) {
        if (pos === 0 || temp[pos] >= temp[pos - 1]) {
            pos += 1;
        }
        else {
            //swapping pos-1 with pos
            let buffer = temp[pos];
            temp[pos] = temp[pos - 1];
            temp[pos - 1] = buffer;
            pos -= 1;
        }
    }
    return temp;
}
exports.gnomeSort = gnomeSort;
