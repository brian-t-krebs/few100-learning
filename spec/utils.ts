export const add = (a: number, b: number) => a + b;

// this is a function that takes a number, divides it by two, and if the remainder is zero it's an even number.
//   numbers.every will return true, if every single number in the array is even.
export const isEven = (n: number) => n % 2 === 0;

export const identity = (n: any) => n;

export interface IHaveAMessage { from: string; message: string; }
