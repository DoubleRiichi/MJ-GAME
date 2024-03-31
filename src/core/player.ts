import { Hand } from "./hand";
import { Seat, STARTING_SCORE, SEATS } from "./rules";

export type Player = {

    name:  string;
    score: number;
    position: number;
    hand?: Hand;
    seat: string;
}
