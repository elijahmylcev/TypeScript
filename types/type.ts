//Boolean
const isFetching: boolean = true;
const isLoading: boolean = false;
// Number
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

// String
const message: string = 'Hello TypeScript';

// Array
const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
// generic types(Из чего состоит данный объект)
const numberArraySecond: Array<number> = [1, 1, 2, 3, 5, 8, 13];

// Tuple (массив из разных типов данных)
const contact: [string, number] = ['Sam', 123123];

// Any
let variable: any = 42;
//...
variable = [];

// function
// void означает, что функция ничего не вернет
function sayMyName(name: string): void {
	console.log(name);
}
sayMyName('Sam');

// Never (Если функция возвращает ошибку, либо работает постоянно)
function throwError(message: string): never {
	throw new Error(message);
}

function infinity(): never {
	while (true) {}
}

// Type (позволяет создавать собственные типы)
type Login = string;

const login: Login = 'admin';
// const login2: login = 2 Error

type ID = string | number; // Или
const id: ID = '123';
const id2: ID = 123;
// const id3: ID = true Error

//Null || undefined
type SomeType = string | null | undefined;
