describe('declaring variables', () => {
    it('an example', () => {
        const name = 'Bob';
        expect(name).toBe('Bob');
    });

    // it + tab is an extention for visual studio code...

    it('what happened above', () => {
        const name = 'Carl';
    });
    it('declaring a variable with let', () => {
        let age: number | string;
        age = 50;
        age = 51;
        age = 'Old';

        let x: any;
        x = 'dog';
        x = 34;
        x = [];

        // let, lets you put the variable on the side of it.

        function add(a: any, b: any) {
            return a + b;
        }


    });
    it('initializing a variabele defins (infers) the type', () => {
        let name = 'Bob';
        name = 'Steve';
        name = 'Kira';
        // name = 1138; // Error! It is inferred to be a string because we created it that way.
        // Consistancy is more important.
    });
});

describe('a bit about strings', () => {
    it('can be delimited with single or double quotes', () => {
        const name = 'Bob';
        // The comment here actually does functionality, it tells TSLINT to ignore the rule.
        // tslint:disable-next-line: quotemark
        expect(name).toBe("Bob");

        const story = 'She said, "Hello! How is your day going?" in the way out the door.'; // no need ot do escaping.
        // tslint:disable-next-line: quotemark
        const autor = "Flannery O'Connor";
        const author2 = 'Flannery O\'Connor'; // Usual Escape for JavaScript.

    });
    it('string literals - interpreted strings', () => {
        const name = `Bob`;
        expect(name).toBe('Bob');

        const story = `Chapter 1

        It was a dark and stormy night.

        the End`;

        const age = 27;

        const message = 'the name is ' + name + ' and the age is ' + age + '.';
        const message2 = `the name is ${name} and the age is ${age}.`;
        expect(message).toBe(message2);

    });

    it('const - be careful', () => {
        const x = 12;

        // const you cannot assign a new value to the variable....
        //  you're saying change an element of this, so.. it can change the value, but not the type.


        const favoriteNumbers = [2, 3, 9, 20];
        // an element in this can be changed.... one of the values in the array but it will always be a Number Array.

        // favoriteNumbers[2] = "skywalker";
        favoriteNumbers[2] = 10;
        console.log(favoriteNumbers);
        interface Movie {
            title: string;
            yearReleased?: number;
        }

        const movie = {
            title: 'The Rise of Skywalker',
            yearReleased: 2020
        };

        movie.yearReleased = 2019;

    });
});

describe('various types', () => {
    it('number literals', () => {
        const bigNumber = 123_456_789.23;
        const color = 0xFF; // color schemes in hex
        const permissions = 0o33; // ocatal values
        const binary = 0b0101010;

    });
});

describe('array destrucuring and tuples', () => {
    it('array destructuring', () => {
        const friends = ['David', 'Sean', 'Amy'];

        // const first = friends[0];
        // const last = friends[2];
        const [first, , last] = friends;

        expect(first).toBe('David');
        expect(last).toBe('Amy');

    });
    it('using destructuring with rest', () => {
        const todos = ['Clean Garage', 'Fix tire', 'mop floors'];
        const [next, ...others] = todos; // uses the elipse to say (all afterwards)

        expect(next).toBe('Clean Garage');
        expect(others).toEqual(['Fix tire', 'mop floors']);

    });
    it('tuples (a typed arrray) - basic example', () => {
        // accomplsihing something with and without tuples... (two-pulles)
        // Represented as "tight" arrays

        let stuff: [boolean, number];
        let warren: [string, string, number];
        stuff = [true, 140];
        warren = ['Warren', 'Ellis', 53];

    });

    it('AN OOP EXAMPLE', () => {
        interface NameResult { fullName: string; length: number; }

        function formatName(first: string, last: string): NameResult {
            const fullName = `${last}, ${first}`;
            return {
                fullName,
                length: fullName.length
            };
        }

        const { fullName, length: john } = formatName('Han', 'Solo');
        expect(fullName).toBe('Solo, Han');
        expect(john).toBe(9);

    });

    it('a tuple example', () => {
        type NameResult = [string, number];
        function formatName(first: string, last: string): NameResult {
            const fn = `${last}, ${first}`;
            return [fn, fn.length];
        }

        const [fullName, length] = formatName('Luke', 'Skywalker');
        expect(fullName).toBe('Skywalker, Luke');
        expect(length).toBe(15);

    });
});
describe('enums and union constants', () => {
    enum SeatType { window, aisle, middle }

    function getSeatForticket(ticketNumber: number): SeatType {
        if (ticketNumber % 2 === 0) {
            return SeatType.window;
        } else {
            return SeatType.aisle;
        }
    }

    it('it\'s a truth table!', () => {
        expect(true).toBeTruthy();
        expect(false).toBeFalsy();
        expect('').toBeFalsy();
        expect(' ').toBeTruthy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(-1).toBeTruthy();

        // this means if you use one of these as a predicate in an if statement you will getither true or false....
        // e.g.
        if ('tacos') {
            // it is true!
        }

    });
    it('using enums', () => {

        const getMySeat = getSeatForticket(108);
        let cost = 0;
        switch (getMySeat) {
            case SeatType.window: { cost = 100; break; }
            case SeatType.aisle: { cost = 150; break; }
            case SeatType.middle: { cost = 75; break; }
            default: {
                // some other thing
            }
        }
        expect(cost).toBe(100);

    });

    it('type assertions', () => {
        let x: any;

        x = 'Tacos';

        // expect(x.howlong).toBe(5);

        const y = x as string;

        expect(y.length).toBe(5);

        // tslint:disable-next-line: no-angle-bracket-type-assertion
        const z = <string>x;

        expect((x as string).length).toBe(5);
    });
});

