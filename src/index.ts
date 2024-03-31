import * as mjPlayer from "./core/player";
import * as mjWall from "./core/wall";
import * as mjHand from "./core/hand";
import { gnomeSort } from "./core/utils";

type Round = {
    roundwind: string;
    state: mjWall.Game;
}

function initPlayer(name: string, score: number, position: number, seat: string): mjPlayer.Player {

    let player: mjPlayer.Player = {
        name,
        score,
        position,
        seat,
    };

    return player;
}

//ideally returns a Round {roundWind, reserve, wall, deadwall, dora}
function roundStart(): mjWall.Game {

    let reserve  = mjWall.constructReserve();
    let wall     = mjWall.initWall(reserve);
    
    let deadwall = mjWall.initDeadWall(reserve);

    let round: mjWall.Game = {

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
player1.hand = {tiles: mjHand.drawHand(round.reserve)}
player2.hand = {tiles: gnomeSort(mjHand.drawHand(round.reserve))}

process.stdout.write("\n");
console.log(mjHand.handToString(player1.hand.tiles));
console.log(mjHand.handToString(player2.hand.tiles));
mjWall.printWall(round.reserve);

player3.hand = {tiles: gnomeSort(mjHand.drawHand(round.reserve))}
player4.hand = {tiles: gnomeSort(mjHand.drawHand(round.reserve))}

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

