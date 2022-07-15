const trim = str => str.trim();
const lowerCase = str => str.toLowerCase()
const wrapInDiv = str => `<div>${str}</div>`

function compose(...fns) {
    return function (arg) {
        return fns.reduce((returnVal, fn) => fn(returnVal), arg)
    }
}



let string = " javascript "

console.log(compose(trim, lowerCase, wrapInDiv)(string))
