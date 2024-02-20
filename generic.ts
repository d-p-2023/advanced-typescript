function add<T>(a: T): T {
    return a;
}

const result = add<number>(2);
console.log(result); // Output: 2
const result2 = add<string>('Hello');
console.log(result2); // Output: Hello


const reverseArray = <T>(array: T[]): T[] => {
    return array.reverse();
}

console.log(reverseArray<number>([1, 2, 3, 4])); // Output: [4, 3, 2, 1]
console.log(reverseArray<string>(['a', 'b', 'c', 'd'])); // Output: ['d', 'c', 'b', 'a']