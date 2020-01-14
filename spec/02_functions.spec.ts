// First Class Citizen in a programming language can have a variable refer to it.
// Functions are first class citizens.
//  JavaScript is inspired by SmallTalk and LiSP
//     OOP and Functional blend.

// Classes are 15 min, they are super awesome but we don't use them a lot.
//  Lots of Functions and Interfaces

describe('functions', () => {
    describe('declaring them', () => {
        it('has about three different ways to do it.', () => {
            // 1. Named Function

            expect(add(2, 2)).toBe(4);


            function add(a: number, b: number) {
                return a + b;
            }

            // 2. Anonymous Functions
            const subtract = function (a: number, b: number) {
                return a - b;
            };
            const multiply = (a: number, b: number) => a * b;
            // TS Lint Prefers Arrow Functions, multiply is the same way we have subratct.
            // rules are almost the same as Lambda Functions in C#


            expect(subtract(10, 2)).toBe(8);
            expect(multiply(3, 3)).toBe(9);

            // Only Named Functions can be FORWARD referenced.... so these need to be up to the top... only the NANMED functions
            // see how add's expect is above the add function, because subract and multiply aren't they can't be.
        });
        it('details of arrow functions', () => {
            const getMessage = () => 'Howdy!';

            expect(getMessage()).toBe('Howdy!');

            const logIt = (message: string) => {
                console.log(message);
                return 'Logged It';
            };

            expect(logIt('Pizza')).toBe('Logged It');

        });
    });
    describe('arguments to functions', () => {
        it('does not have overloading', () => {
            function formatName(first: string, last: string, mi?: string) {
                let firstPart = `${last}, ${first}`;
                if (mi) {
                    firstPart += ` ${mi}.`;
                }
                return firstPart;
            }


            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

        });

        it('default values for parameters', () => {
            function add(a: number = 15, b: number = 10) { // 15 and 10 are the default values
                return a + b;
            }

            // uundefined and only undefined is the only way to skip an argument.
            expect(add(2, 2)).toBe(4);
            expect(add(12)).toBe(22);
            expect(add(undefined, 12)).toBe(27);

        });
        it('you can use that rest operator thing', () => {

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
                // all arrays support reduce, that takes an argument that is a function... higher order functions.

            }
            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
            // YOU MUST LEARN ALL THE FUNCTIONS FOR ARRAYS AS AN ANGULAR PROGRAMMER.
            //  GOTTA DO IT, WE'LL DO HIGHER ORDER FUNCTIONS TODAY.
            //  JEFF WILL TALK ABOUT IT HOW IT WORKS TOMORROW MORNING.

        });
    });
    describe('higher order functions', () => {
        // A FUNCTION THAT TAKES ONE OR MORE ARGUMENTS
        //  return a function

        // a function athat takes a function as an argument.
        it('(the basic syntax)', () => {

            type StringModifier = (msg: string) => string; // this is the Data Type (like delegates...)

            function logItOut(message: string, f: StringModifier) {
                console.log(`At ${new Date().toISOString()}: ${f(message)}`);
            }

            logItOut('Tacos!!!', (s: string) => s.toUpperCase());

            function decorate(x: string) {
                return `***${x}***`;
            }

            logItOut('Burrito', decorate);

        });
        describe('HOF that returns a function', () => {

            it('with just a normal ', () => {
                // <element>content</element>

                function tagMaker(element: string, content: string) {
                    return `<${element}>${content}</${element}>`;
                }

                expect(tagMaker('customer', 'Bob Smith')).toBe('<customer>Bob Smith</customer>');
                expect(tagMaker('customer', 'Sue Jones')).toBe('<customer>Sue Jones</customer>');
            });

            it('oop version', () => {

                class TagMaker {
                    private element: string;

                    constructor(element: string) {
                        this.element = element;
                    }

                    make(content: string) {
                        return `<${this.element}>${content}</${this.element}>`;
                    }

                }

                const customerMaker = new TagMaker('customer');

                expect(customerMaker.make('Bob Smith')).toBe('<customer>Bob Smith</customer>');


            });

            it('how a functional programmer would do it.', () => {

                function tagMaker(element: string) {
                    return (content: string) => `<${element}>${content}</${element}>`;
                }

                const customerMaker = tagMaker('customer');

                expect(customerMaker('Bob Smith')).toBe('<customer>Bob Smith</customer>');
            });

        });
    });
