//Boolean
var isFetching = true;
var isLoading = false;
// Number
var int = 42;
var float = 4.2;
var num = 3e10;
// String
var message = 'Hello TypeScript';
// Array
var numberArray = [1, 1, 2, 3, 5, 8, 13];
// generic types(Из чего состоит данный объект)
var numberArraySecond = [1, 1, 2, 3, 5, 8, 13];
// Tuple (массив из разных типов данных)
var contact = ['Sam', 123123];
// Any
var variable = 42;
//...
variable = [];
// function
// void означает, что функция ничего не вернет
function sayMyName(name) {
    console.log(name);
}
sayMyName('Sam');
// Never (Если функция возвращает ошибку, либо работает постоянно)
function throwError(message) {
    throw new Error(message);
}
function infinity() {
    while (true) { }
}
var login = 'admin';
var id = '123';
var id2 = 123;
// const id3: ID = true Error
