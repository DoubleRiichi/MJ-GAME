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
const mjWall = __importStar(require("../core/wall"));
const rules_1 = require("../core/rules");
let v = mjWall.constructReserve();
let t = new Map();
v.forEach(tile => {
    let tile_name = rules_1.HAND_REPRESENTATION[tile - 1];
    let val = t.get(tile_name);
    if (val !== undefined) {
        t.set(tile_name, val + 1);
    }
    else {
        t.set(tile_name, 1);
    }
});
let res = 0;
t.forEach((value, key, _) => {
    res = res + value;
});
console.log(res); //136, test is passed
