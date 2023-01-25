input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    led.plot(2, 0)
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    HTTP_SERVER_NAME_THINGSPEAK,
    HTTP_SERVER_PORT_THINGSPEAK,
    HTTP_SERVER_PATH_FIELD1_THINGSPEAK
    )
    led.plot(2, 1)
    led.plot(3, 0)
    led.plot(3, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.plot(2, 0)
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "g6d9abcb7cf856d-jegyed50db21c.adb.uk-london-1.oraclecloudapps.com",
    443,
    "/ords/f?p=106:6::application_process=log_data_01:::p6_field1:11.7"
    )
    led.plot(2, 1)
    led.plot(3, 0)
    led.plot(3, 1)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    led.plot(2, 0)
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "192.168.0.4",
    8080,
    "/ords/f?p=106:6::application_process=log_data_01:::P6_FIELD1:-11.6"
    )
    led.plot(2, 1)
    led.plot(3, 0)
    led.plot(3, 1)
})
let HTTP_SERVER_PATH_FIELD1_THINGSPEAK = ""
let HTTP_SERVER_PORT_THINGSPEAK = 0
let HTTP_SERVER_NAME_THINGSPEAK = ""
let AP_NAME_TARR = "ARRIS-02D9"
let AP_PW_TARR = "01C2BBC549B74403"
AP_PW_TARR = "01C2BBC549B74403"
let AP_NAME_TPLINK1 = "TP-LINK_WiFi_2"
let AP_PW_TPLINK1 = "Kajdacs1"
let AP_NAME_MOB1 = "MOBAP"
let AP_PW_MOB1 = "Budapest1"
HTTP_SERVER_NAME_THINGSPEAK = "api.thingspeak.com"
HTTP_SERVER_PORT_THINGSPEAK = 80
let HTTPS_SERVER_PORT_THINGSPEAK = 443
HTTP_SERVER_PATH_FIELD1_THINGSPEAK = "/update?api_key=ICPZTSAEIMBWJDTK&field1=0"
let HTTP_SERVER_PATH_FIELD8_THINGSPEAK = "/update?api_key=ICPZTSAEIMBWJDTK&field1=10&field2=20;field3=30;field4=40;field5=50;field6=60;field7=70;field8=80"
led.setBrightness(15)
led.plot(4, 4)
basic.clearScreen()
WiFiBit.changeHttpMethodWaitPeriod(500)
led.plot(0, 0)
WiFiBit.connectToWiFiBit()
led.plot(0, 1)
led.plot(1, 0)
WiFiBit.connectToWiFiNetwork(AP_NAME_TARR, AP_PW_TARR)
led.plot(1, 1)
WiFiBit.changeHttpMethodWaitPeriod(100)
