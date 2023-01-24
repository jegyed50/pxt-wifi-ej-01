input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    WiFiBit.connectToWiFiBit()
    WiFiBit.connectToWiFiNetwork("ARRIS-02D9", "01C2BBC549B74403")
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "api.thingspeak.com",
    80,
    "/update?api_key=ICPZTSAEIMBWJDTK&field1=150"
    )
    WiFiBit.disconnectFromWiFiNetwork()
    basic.showIcon(IconNames.SmallHeart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
