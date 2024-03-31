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
exports.discardTile = exports.drawTile = exports.drawHand = exports.handToString = void 0;
const rules_1 = require("./rules");
const utils = __importStar(require("./utils"));
function handToString(hand) {
    let result = "";
    hand.forEach(tile => {
        result += rules_1.HAND_REPRESENTATION[tile - 1] + " ";
    });
    return result;
}
exports.handToString = handToString;
function drawHand(reserve) {
    let hand_tiles = [];
    for (let i = 0; i < rules_1.HAND_LIMIT; i++) {
        let index = utils.randIndex(reserve.length);
        hand_tiles.push(reserve[index]);
        reserve.splice(index, 1);
    }
    return utils.gnomeSort(hand_tiles);
}
exports.drawHand = drawHand;
function drawTile(wall) {
    let index = utils.randIndex(wall.length);
    let result = wall[index];
    wall.splice(index, 1);
    return result;
}
exports.drawTile = drawTile;
function discardTile(hand, pick) {
    let discard = hand[pick];
    hand.splice(pick);
    return [utils.gnomeSort(hand), discard];
}
exports.discardTile = discardTile;
