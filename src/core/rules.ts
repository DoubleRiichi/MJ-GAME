//Define the basics of mahjong by providings types other programs can work on

/*
export type tile_union = '1m' | '2m' | '3m' | '4m' | '5m' | '6m' | '7m' | '8m' | '9m' |
                         '1p' | '2p' | '3p' | '4p' | '5p' | '6p' | '7p' | '8p' | '9p' |
                         '1s' | '2s' | '3s' | '4s' | '5s' | '6s' | '7s' | '8s' | '9s' |
                         'E'| 'S' | 'W' | 'N' |
                         'Hk' | 'Ht' | 'Ch';
*/
/*export type closed_yaku = {'tsumo':  1} | {'riichi': 1} | {'ippatsu': 1} | {'pinfu': 1} | {'iipeikou': 1} |
                          {'doubleri': 2} | {'chanta': 2} |



export type open_yaku = {'haitei': 1} | {'houtei': 1} | {'rinshan': 1} | {'chankan': 1} | {'tanyao': 1} | {'yakuhai': 1}*/


export type yaku_union = 'tsumo' | 'riichi' | 'ippatsu' | 'pinfu' | 'iipeikou' | 'haitei' | 'houtei' | 
                  'rinshan' | 'chankan' | 'tanyao' | 'yakuhai' | 'doubleri' | 'chanta' | 'sanshoku' |
                  'ittsu' | 'toitoi' | 'sanankou' | 'sanshoku doukou' | 'sankatsu' | 'chiitoi' | 'honrouto' |
                  'shousangen' | 'honitsu' | 'junshan' | 'ryanpeikou' | 'chinitsu' | 'kazoe' | 'kokushi' |
                  'suuankou' | 'daisangen' | 'shousuushii' | 'daisuushii' | 'tsuuiisou' | 'chinroutou' |
                  'ryuuiisou' | 'chuuren'  | 'suukantsu' | 'tenhou' | 'chiihou' | 'nagashi';

 

export const HAND_REPRESENTATION: string[] = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m',
                                             '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p',
                                             '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s',
                                             'E', 'S', 'W', 'N',
                                             'Hk', 'Ht', 'Ch'];


export const TILES_NUMBER: number[] =  [0, 1, 2, 3, 4, 5, 6, 7, 8,
                                       9, 10, 11, 12, 13, 14, 15, 16, 17, 
                                       18,19, 20, 21, 22, 23, 24, 25, 26, 
                                       27, 28, 29, 30, 
                                       31, 32, 33]

//Hands, Tiles, Wall,
export const HIGHEST_TILE: number = 34;

export const TILES_AMOUNT: number = 136; //34 different tiles*4

export const HAND_LIMIT: number = 13;

export const WALL_AMOUNT: number = 70.

export const DEAD_WALL_AMOUNT: number = 14;

//Round
export type Round = "East" | "South" | "West" | "North";


//Player
export const PLAYERS = 4;
export type Seat = 'E' | 'S' | 'W' | 'N';
export const SEATS = ['E', 'S', 'W', 'N'];
//Score
export const STARTING_SCORE = 25000;

export const SCORE_TO_WIN = 30000;

//-> to add: Han, FU
