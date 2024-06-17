"use strict";
// Question 130: Explain how to export a function from one JavaScript file and import it into another file.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: In modern JavaScript development, modules allow you to divide your code into separate files. This makes your code more organized and maintainable. You can export functions, objects, or primitives from one file and import them into another.
const sum_1 = __importDefault(require("./sum"));
(0, sum_1.default)(5, 6);
