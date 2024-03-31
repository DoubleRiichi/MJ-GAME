"use strict";
function findTriplets(hand_holder) {
    let melds = [];
    for (let i = 0; i < hand_holder.length; i++) {
        if (i < hand_holder.length - 2) {
            let x = hand_holder[i];
            let y = hand_holder[i + 1];
            let z = hand_holder[i + 2];
            if (x == y && y == z) {
                melds.push([x, y, z]);
                hand_holder.splice(i, 3);
                i = 0;
            }
        }
    }
    return melds;
}
function findSequences(hand_holder) {
    let melds = [];
    for (let i = 0; i < hand_holder.length; i++) {
        if (i < hand_holder.length - 2) {
            let buffs = [];
            let i_remove = [];
            buffs.push(hand_holder[i]);
            for (let i2 = i;; i2++) {
                let x = hand_holder[i2];
                let y = hand_holder[i2 + 1];
                if (y > buffs[0] + 3 || buffs.length == 3) {
                    break;
                }
                if (x == y) {
                    continue;
                }
                else if (x + 1 == y) {
                    buffs.push(y);
                    i_remove.push(i2);
                    continue;
                }
            }
            if (buffs.length == 3) {
                melds.push(buffs);
                i_remove.forEach((key) => hand_holder.splice(key, 1));
            }
        }
    }
    return melds;
}
function determineMelds(hand) {
    let hand_holder = hand;
    let meldsSeq = findSequences(hand_holder);
    let meldsTriplets = findTriplets(hand_holder);
    return meldsSeq.concat(meldsTriplets);
}
console.log(determineMelds([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 11, 11, 33, 33]));
console.log(determineMelds([1, 2, 2, 3, 3, 4, 7, 8, 9, 11, 11, 11, 33, 33]));
console.log(determineMelds([1, 1, 1, 2, 3, 4, 7, 8, 9, 11, 11, 11, 33, 33]));
