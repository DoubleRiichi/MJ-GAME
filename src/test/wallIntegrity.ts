import * as mjWall from "../core/wall";
import { HAND_REPRESENTATION } from "../core/rules";

let v = mjWall.constructReserve();

let t: Map<String, number> = new Map();

v.forEach(tile => {
    let tile_name = HAND_REPRESENTATION[tile - 1];
    let val =  t.get(tile_name);

    if(val !== undefined) {
        t.set(tile_name,  val + 1);
    } else {
        t.set(tile_name, 1);
    }
});

let res = 0;
t.forEach((value: number, key: String, _) => {
    res = res + value;
});

console.log(res); //136, test is passed