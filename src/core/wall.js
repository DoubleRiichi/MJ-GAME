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
exports.printWall = exports.initDeadWall = exports.initWall = exports.constructReserve = void 0;
const rules_1 = require("./rules");
const utils = __importStar(require("./utils"));
function constructReserve() {
    let x4 = 1;
    let reserve = [];
    for (let i = 1; i <= rules_1.HIGHEST_TILE; i++) {
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
    let wall = [];
    for (let i = 0; i < rules_1.WALL_AMOUNT; i++) {
        let index = utils.randIndex(reserve.length);
        wall.push(reserve[index]);
        reserve.splice(index, 1);
    }
    return wall;
}
exports.initWall = initWall;
function initDeadWall(reserve) {
    let deadwall = [];
    for (let i = 0; i < rules_1.DEAD_WALL_AMOUNT; i++) {
        let index = utils.randIndex(reserve.length);
        deadwall.push(reserve[index]);
        reserve.splice(index, 1);
    }
    return deadwall;
}
exports.initDeadWall = initDeadWall;
function printWall(wall) {
    let count = 1;
    wall.forEach(tileNum => {
        if (count % 10 === 0) {
            process.stdout.write("\n");
        }
        process.stdout.write(rules_1.HAND_REPRESENTATION[tileNum - 1] + " ");
        count++;
    });
}
exports.printWall = printWall;
