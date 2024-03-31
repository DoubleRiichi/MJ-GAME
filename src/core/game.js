"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = exports.draw = exports.initDeadWall = exports.initWall = exports.constructReserve = void 0;
var rules_1 = require("./rules");
function randIndex(length) {
    return (Math.floor(Math.random() * length));
}
function constructReserve() {
    var x4 = 1;
    var reserve = [];
    for (var i = 1; i <= rules_1.HIGHEST_TILE; i++) {
        reserve.push(i);
        if (i == rules_1.HIGHEST_TILE && x4 < 4) {
            i = 0;
            x4 += 1;
        }
    }
    return reserve;
}
exports.constructReserve = constructReserve;
function initWall(reserve) {
    var wall = { tiles: [] };
    for (var i = 0; i < rules_1.WALL_AMOUNT; i++) {
        var index = randIndex(reserve.length);
        wall.tiles.push(reserve[index]);
        reserve.splice(index, 1);
    }
    return wall;
}
exports.initWall = initWall;
function initDeadWall(reserve) {
    var deadwall = { tiles: [] };
    for (var i = 0; i < rules_1.DEAD_WALL_AMOUNT; i++) {
        var index = randIndex(reserve.length);
        deadwall.tiles.push(reserve[index]);
        reserve.splice(index, 1);
    }
    return deadwall;
}
exports.initDeadWall = initDeadWall;
function draw() {
}
exports.draw = draw;
function startGame() {
}
exports.startGame = startGame;
