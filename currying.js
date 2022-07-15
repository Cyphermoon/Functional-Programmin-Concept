function add(a) {
    return function (b) {
        return a + b
    }
}

// console.log(add(2)(6)

function describe(description) {
    return function (weather) {
        return description + " " + weather
    }
}

let weather = describe("The weather is")
console.log(weather("hot"))