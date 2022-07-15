
const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

function compose(...fns) {
    return function (arg) {
        return fns.reduce((returnVal, fn) => fn(returnVal), arg)
    }
}

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilianClockTime = clockTime => ({
    ...clockTime,
    hours: clockTime["hours"] > 12 ? clockTime["hours"] - 12 : clockTime
})

const appendAMPM = clockTime => ({
    ...clockTime,
    am_pm: clockTime["hours"] > 12 ? "pm" : "am"
})

const display = target => time => target(time);

const formatClock = format => time =>
    format.replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace("ss", time.seconds)
        .replace("tt", time["am_pm"]);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
})


const convertToCivilianClockTime = clockTime => compose(
    appendAMPM,
    civilianClockTime
)(clockTime)

const doubleDigits = civilianTime => compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
)(civilianTime)

const startTicking = () => {
    setInterval(
        compose(
            getCurrentTime,
            serializeClockTime,
            convertToCivilianClockTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond())
}

