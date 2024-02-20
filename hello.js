"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet2 = exports.greet = void 0;
var greet = function (name) {
    if (name === 'World') {
        return "Hello, ".concat(name, "!");
    }
    else {
        return '20';
    }
};
exports.greet = greet;
console.log(greet('World'));
function greet2(name) {
    return "Hello, ".concat(name, "!");
}
exports.greet2 = greet2;
console.log(greet2('World2'));
