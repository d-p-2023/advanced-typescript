var greet = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet('World'));
function greet2(name) {
    if (name === 'World') {
        return "Hello, ".concat(name, "!");
    }
    else {
        return 11;
    }
}
console.log(greet2('World2'));
