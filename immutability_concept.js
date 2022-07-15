
//Pure Functions
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColorWithConcat = (title, array) => array.concat([{ title }])
const addColor = (title, array) => ([...array, { title }])

//Data transformation
let schools = [
    { name: "Yorktown" },
    { name: "Stratford" },
    { name: "Washington & Liberty" },
    { name: "Wakefield" }
];

let updatedSchool = (oldName, newName, array) => array.map((item) => {
    if (item.name.toLowerCase() === oldName.toLowerCase()) return ({ ...item, name: newName });
    return item
})
const schoolObj = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};

const schoolArray = Object.keys(schoolObj).map((key, i, arr) => ({
    name: key,
    wins: schoolObj[key]
}))

console.log(schoolArray)