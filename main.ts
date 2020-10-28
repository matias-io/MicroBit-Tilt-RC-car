function Left () {
    pins.servoWritePin(AnalogPin.P0, -90)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function Game () {
    while (recieveinput) {
        pitch = input.rotation(Rotation.Pitch)
        roll = input.rotation(Rotation.Roll)
        if (-15 <= pitch && pitch <= 15 && -15 <= roll && roll <= 15) {
            StandBy()
        } else if (pitch < -15) {
            Forward()
        } else if (pitch > 15) {
            Backward()
        } else if (roll > 15) {
            Right()
        } else if (roll < -15) {
            Left()
        } else {
        	
        }
    }
}
function Forward () {
    pins.servoWritePin(AnalogPin.P0, -100)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
input.onButtonPressed(Button.AB, function () {
    if (!(gamestarted)) {
        recieveinput = true
        gamestarted = true
        Game()
    } else {
        recieveinput = false
        gamestarted = false
    }
})
function Right () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
function StandBy () {
    basic.showLeds(`
        # . # . #
        . . # . .
        . # # # .
        . . # . .
        # . # . #
        `)
}
function Backward () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.digitalWritePin(DigitalPin.P0, 0)
}
let recieveinput = false
let gamestarted = false
let roll = 0
let pitch = 0
let LastAction = ""
pitch = 0
roll = 0
gamestarted = false
