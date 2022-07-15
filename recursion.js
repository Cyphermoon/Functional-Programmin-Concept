function countdown(value) {
    console.log(value)

    return value > 0 ? countdown(value - 1) : value
}


const dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 22,
            fullName: {
                first: "Dan",
                last: "Deacon"
            }
        }
    }
};

function deepPick(fields, object = {}) {
    const [first, ...remaining] = fields.split(".");
    return remaining.length ? deepPick(remaining.join("."), object[first]) : object[first]
}

console.log(deepPick("data.info.fullname.first", dan));