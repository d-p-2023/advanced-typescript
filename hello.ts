

const greet = (name: string): string => {
    if (name === 'World') {
        return `Hello, ${name}!`;
    } else {
        return '20';
    }
}

console.log(greet('World'));

function greet2(name: string) {
    return `Hello, ${name}!`;
}

console.log(greet2('World2'));

export { greet, greet2 };