"use strict";
// Question 132: Discuss the difference between default and named exports in JavaScript modules.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: JavaScript provides two main types of exports: default and named. A module can have only one default export, but multiple named exports. This flexibility supports various use cases in module design.
const plusAndMinus_1 = require("./plusAndMinus");
const sum_1 = __importDefault(require("./sum"));
(0, plusAndMinus_1.plus)(2, 2);
(0, plusAndMinus_1.minus)(5, 4);
(0, sum_1.default)(4, 5);
