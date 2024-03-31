import {HAND_REPRESENTATION, TILES_NUMBER, HAND_LIMIT, HIGHEST_TILE} from './rules';
import * as utils from "./utils";


export type Hand = {
    tiles:    number[]; 
    yakus?:   string[];
    shanten?: number;
    closed?:  boolean;
}


export function handToString(hand: number[]): string {

    let result: string = "";
    
    hand.forEach(tile => {
        result += HAND_REPRESENTATION[tile - 1] + " ";
    });

    return result;
}


export function drawHand(reserve: number[]): number[] {

    let hand_tiles = [];

    for(let i = 0; i < HAND_LIMIT; i++) {

        let index = utils.randIndex(reserve.length);

        hand_tiles.push(reserve[index]);
        reserve.splice(index, 1);
    }

    return utils.gnomeSort(hand_tiles);
}



export function drawTile(wall: number[]): number {

    let index = utils.randIndex(wall.length);

    let result = wall[index];
    wall.splice(index, 1);

    return result;
}


export function discardTile(hand: number[], pick: number): [number[], number] {

    let discard = hand[pick];
    hand.splice(pick);
    
    return [utils.gnomeSort(hand), discard];
}