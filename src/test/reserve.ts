import { drawHand,handToString } from "../core/hand";
import { constructReserve, printWall } from "../core/wall";


let t = constructReserve();

printWall(t);
console.log("\n");
let h = drawHand(t);
console.log(handToString(h));
console.log("\n");
printWall(t);