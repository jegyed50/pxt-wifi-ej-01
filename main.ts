WiFiBit.connectToWiFiBit()
basic.pause(3000)
WiFiBit.connectToWiFiNetwork("ARRIS-02D9", "01C2BBC549B74403")
WiFiBit.executeAtCommand("ATE0", 1000)
WiFiBit.changeHttpMethodWaitPeriod(500)
WiFiBit.executeHttpMethod(
HttpMethod.GET,
"api.thingspeak.com",
80,
"/update?api_key=ICPZTSAEIMBWJDTK&field1=0"
)
WiFiBit.writeBlynkIoTPinValue("1", "V1", "BzMEzpZ9Bud9ZUXZoJVEkbfneCavDVDx")
WiFiBit.disconnectFromWiFiNetwork()
