radio.onReceivedValue(function (name, value) {
    led.toggle(4, 4)
    serial.writeValue(name, value)
    if (name == "Tem") {
        if (value >= 29) {
            led.toggle(2, 2)
        }
    }
})
let coordinate = [0, 0]
let D2MX = [0, coordinate, 0]
basic.showString("RX")
radio.setGroup(200)
