//task 1
interface UserInterface {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: UserInterface[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

//task 2
interface UserInterface {
    name: string;
    age: number;
    occupation: string;
}
interface AdminInterface {
    name: string;
    age: number;
    role: string;
}

type Person = UserInterface | AdminInterface;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
//task 3
interface ObjectManipulatorInterface {
    set(key: string, value: string | number): ObjectManipulator;
    get(key: string): string | number;
    delete(key: string): ObjectManipulator;
    getObject(): object;
}

export class ObjectManipulator implements ObjectManipulatorInterface {

    constructor(protected obj) { }

    public set(key: string, value: string | number): ObjectManipulator {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }

    public get(key: string): string | number {
        return this.obj[key];
    }

    public delete(key: string): ObjectManipulator{
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}
//task 4
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T>(mapper: Function, input: any): Array<T> | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction<T>(subInput: any): Array<T> | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
export function filter<T>(filterer: number, input:any): Array<T> | Function {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction<T>(subInput: any): Array<T> | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a:number, b:number): Number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): Number | Function {
            if (arguments.length === 0){
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}
