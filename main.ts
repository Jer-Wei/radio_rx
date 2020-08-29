radio.onReceivedValue(function (name, value) {
    if (name == "temperature") {
        led.toggle(4, 4)
        serial.writeValue("temperature", value)
    }
})
basic.showString("Radio RX")
radio.setGroup(200)
serial.redirectToUSB()
