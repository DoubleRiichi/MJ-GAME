"use strict";
//Define the basics of mahjong by providings types other programs can work on
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCORE_TO_WIN = exports.STARTING_SCORE = exports.SEATS = exports.PLAYERS = exports.DEAD_WALL_AMOUNT = exports.WALL_AMOUNT = exports.HAND_LIMIT = exports.TILES_AMOUNT = exports.HIGHEST_TILE = exports.TILES_NUMBER = exports.HAND_REPRESENTATION = void 0;
exports.HAND_REPRESENTATION = ['1m', '2m', '3m', '4m', '5m', '6m', '7m', '8m', '9m',
    '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p',
    '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s',
    'E', 'S', 'W', 'N',
    'Hk', 'Ht', 'Ch'];
exports.TILES_NUMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
    31, 32, 33];
//Hands, Tiles, Wall,
exports.HIGHEST_TILE = 34;
exports.TILES_AMOUNT = 136; //34 different tiles*4
exports.HAND_LIMIT = 13;
exports.WALL_AMOUNT = 70.;
exports.DEAD_WALL_AMOUNT = 14;
//Player
exports.PLAYERS = 4;
exports.SEATS = ['E', 'S', 'W', 'N'];
//Score
exports.STARTING_SCORE = 25000;
exports.SCORE_TO_WIN = 30000;
//-> to add: Han, FU
