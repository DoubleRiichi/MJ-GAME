import { WALL_AMOUNT, DEAD_WALL_AMOUNT, Round, TILES_AMOUNT, HIGHEST_TILE, HAND_REPRESENTATION } from "./rules"
import * as utils from "./utils";


export type Game = {

    current_round?: Round;
    reserve: number[];
    wall: number[];
    deadwall: number[];
}


export function constructReserve(): number[] {

    let x4: number = 1;
    let reserve: number[] = [];

    for(let i = 1; i <= HIGHEST_TILE; i++) {
        
        reserve.push(i);

        if(i == HIGHEST_TILE && x4 < 4) {
            i = 0;
            x4 += 1;
        }
    }
    
    return reserve;
}



export function initWall(reserve: number[]): number[]{

    let wall: number[] = [];

    for(let i = 0; i < WALL_AMOUNT; i++) {

        let index = utils.randIndex(reserve.length);

        wall.push(reserve[index]);
        reserve.splice(index, 1);
    }

    return wall;
}


export function initDeadWall(reserve: number[]): number[] {

    let deadwall: number[] = [];

    for(let i = 0; i < DEAD_WALL_AMOUNT; i++) {

        let index = utils.randIndex(reserve.length);

        deadwall.push(reserve[index]);
        reserve.splice(index, 1);
    }

    return deadwall;
}

export function printWall(wall: number[]): void {
    let count = 1

    wall.forEach(tileNum => {
        if(count % 10 === 0) {
            process.stdout.write("\n");
        }

        process.stdout.write(HAND_REPRESENTATION[tileNum - 1] + " ");
        count++; 
    });
}