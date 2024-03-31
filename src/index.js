"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mjWall = __importStar(require("./core/wall"));
const mjHand = __importStar(require("./core/hand"));
const utils_1 = require("./core/utils");
function initPlayer(name, score, position, seat) {
    let player = {
        name,
        score,
        position,
        seat,
    };
    return player;
}
//ideally returns a Round {roundWind, reserve, wall, deadwall, dora}
function roundStart() {
    let reserve = mjWall.constructReserve();
    let wall = mjWall.initWall(reserve);
    let deadwall = mjWall.initDeadWall(reserve);
    let round = {
        reserve,
        wall,
        deadwall,
    };
    return round;
}
let player1 = initPlayer("alba", 25000, 1, 'E');
let player2 = initPlayer("saphi", 25000, 1, 'S');
let player3 = initPlayer("Erea", 25000, 1, "W");
let player4 = initPlayer("Areaa", 25000, 1, "S");
let round = roundStart();
mjWall.printWall(round.reserve);
player1.hand = { tiles: mjHand.drawHand(round.reserve) };
player2.hand = { tiles: (0, utils_1.gnomeSort)(mjHand.drawHand(round.reserve)) };
process.stdout.write("\n");
console.log(mjHand.handToString(player1.hand.tiles));
console.log(mjHand.handToString(player2.hand.tiles));
mjWall.printWall(round.reserve);
player3.hand = { tiles: (0, utils_1.gnomeSort)(mjHand.drawHand(round.reserve)) };
player4.hand = { tiles: (0, utils_1.gnomeSort)(mjHand.drawHand(round.reserve)) };
/*
console.log(mjHand.handToString(player1.hand.tiles));
console.log(mjHand.handToString(player2.hand.tiles));
console.log(mjHand.handToString(player3.hand.tiles));
console.log(mjHand.handToString(player4.hand.tiles));


let p1Draw = mjHand.drawTile(player1.hand.tiles);
console.log(p1Draw);
let p1Res = mjHand.discardTile(p1Draw, 2);
console.log()
*/
/* mjWall.printWall(round.wall);
mjWall.printWall(round.deadwall);
*/
