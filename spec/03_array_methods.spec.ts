import { isEven, IHaveAMessage } from './utils';

describe('array methods', () => {
    // These are methods available on any array in JavaScript.
    //   Jeff hasn't shown any loops.  JavaScript has many standard loops... For, Do, While loops...
    //
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const justEvenNumbers = [2, 4, 6, 8, 10];
    it('checking the membership(aka elements) of an array ', () => {
        // numbers.every((n: number) => isEven(n));

        // Intellisense will give you the isEven to import from utils.ts if you're using it.
        // As you use things, it will import... but sometimes you have to type the import, but if it's already used
        // it's going to be ok.

        // Easier way to do it than 4 lines above...
        const allEvens = numbers.every(isEven);
        expect(allEvens).toBe(false);

        const allEvenNumbers = justEvenNumbers.every(isEven);
        expect(allEvenNumbers).toBe(true);

        // the SOME command
        const someEven = numbers.some(isEven); // the keyword is SOME, are there some?  Remember Jeff Shirtles Example.
        expect(someEven).toBe(true);
    });
    it('visiting every member of an array', () => {
        // this is the ForEach for C#
        //  This is a higher order function, that takes a function.
        // we dont' make a big deal about methods vs. functions in Javascript.
        // .forEach (first item is your element, second can be the index of the array.)
        //          rarely do you do more than the element, but you can get the Array total...
        // Note: forEach doesn't return anything!!
        let total = 0;
        numbers.forEach(n => total += n);
        expect(total).toBe(45);
    });
    describe('array methods that create new arrays', () => {
        it('should behave...', () => {
            function doubleIt(n: number) {
                return n + n;
            }
            const doubled = numbers.map(doubleIt);

            // expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            // expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 16, 18]);
            // FIX THIS! // const dup = numbers.map(identity);


        });
        it('has a filter', () => {
            // in LINQ it is where
            const evens = numbers.filter(isEven);

            expect(evens).toEqual([2, 4, 6, 8]);

        });

        // In your angular application, everything is going to be in ONE BIG OBJECT, and all your logic is going to be in a REDUCE function.

        it('using reduce', () => {
            let total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);

            total = numbers.reduce((s, n) => s + n, 100);
            expect(total).toBe(145);

        });
    });
    describe('an example', () => {
        it('the example', () => {

            // given a cart
            interface CartItem {
                description: string;
                qty: number;
                price: number;
            }

            const cart: CartItem[] = [
                { description: 'Soy Milk', qty: 3, price: 2.37 },
                { description: 'Bread', qty: 2, price: 3.50 },
                { description: 'Beer', qty: 6, price: 7.50 }

            ];

            // I want to know the total quantity and total price.

            interface ShippingInfo {
                totalQty: number;
                totalPrice: number;
            }

            // how do we get from a to B, the Cart to the Price....
            // this is where REDUCE would work, boil it down to the one thing.  and then you can  do it

            const starter: ShippingInfo = {
                totalQty: 0,
                totalPrice: 0
            };

            const result = cart.reduce((s: ShippingInfo, n: CartItem) => {
                return {
                    totalQty: s.totalQty += n.qty,
                    totalPrice: s.totalPrice += n.price
                };
            }, starter);

            expect(result.totalPrice).toBeCloseTo(13.37, 2); // this rounds 13.7777777777
            expect(result.totalQty).toBe(11);

        });

    });
    describe('structural typing', () => {
        // in Javascript, if I have a function of loging somnething to the console...
        // THERE IS NO VOID RETURN IN JAVASCRIPT.  You can say it is a void, but it's just style ot tell people it's not returning anything
        // Javascript can take any old thing and accept it, and move on with life.
        // "Duck Typing" - if it looks like a duck, and talks like a duck, it's probably a duck.
        // it's pretty cool and fun to use, as C# things require data types, and is strictly typed.
        // it makes the method way to specific in C# when you do that.

        // Anonomous interfaces are OK, you can do it in line, but it's OK... it's like you've been through the desert on a horse with no name.
        it('an example', () => {

            function logIt(thingy: IHaveAMessage): void {
                console.log(thingy.message + ' from: ' + thingy.from);
            }

            const call = {
                from: 'Mom',
                message: 'Call me.',
                time: '4:00 PM'
            };

            logIt(call);

            // logIt({ from: 'Joe', message: 'Tacos are ready', time: 'Noon'})

        });
    });
});

describe(`two loops you might use, but probably won't`, () => {
    it('for in loop', () => {
        /* DON'T USE FOR LOOPS IN ARRAYS, UNLESS YOU WANT PROPERTIES.
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                let total = 0;
                for (const num in numbers) {
                    total += num; // += turns things into a string....Error: Expected '0012345678' to be 45.
                    // for enumerates the PROPERTIES of an object.  Don't do this....
                }
                expect(total).toBe(45); */

        const book = {
            title: 'Hyperobjects',
            author: 'Morton'
        };

        for (const prop in book) {
            console.log(`Movie's ${prop} is ${book[prop]}`);
            // Will Output the enumeration of through the book's properties.
            // 'Movie's title is Hyperobjects'
            // 'Movie's author is Morton'
        } // the IN is the keyword here...

    });
    it('the way more useful "for of" loop', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let total = 0;
        for (const n of numbers) { // the OF is the key here....
            total += n;
        }

        expect(total).toBe(45);

    });

});
