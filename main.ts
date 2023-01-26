input.onButtonPressed(Button.A, function () {
    led.unplot(2, 1)
    led.plot(2, 0)
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    HTTP_SERVER_NAME_THINGSPEAK,
    HTTP_SERVER_PORT_THINGSPEAK,
    HTTP_SERVER_PATH_FIELD8_THINGSPEAK
    )
    led.plot(2, 1)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(3, 1)
    led.plot(3, 0)
    WiFiBit.SSL_GET_EJ(
    HttpMethod.GET,
    HTTP_SERVER_NAME_THINGSPEAK,
    TCPorSSL.TCP,
    HTTP_SERVER_PORT_THINGSPEAK,
    HTTP_SERVER_PATH_FIELD8_THINGSPEAK
    )
    led.plot(3, 0)
})
let HTTP_SERVER_PATH_FIELD8_THINGSPEAK = ""
let HTTP_SERVER_PORT_THINGSPEAK = 0
let HTTP_SERVER_NAME_THINGSPEAK = ""
let AP_NAME_TARR = "ARRIS-02D9"
let AP_PW_TARR = "01C2BBC549B74403"
let AP_NAME_TPLINK1 = "TP-LINK_WiFi_2"
let AP_PW_TPLINK1 = "Kajdacs1"
let AP_NAME_MOB1 = "MOBAP"
let AP_PW_MOB1 = "Budapest1"
// thingspeak
HTTP_SERVER_NAME_THINGSPEAK = "api.thingspeak.com"
HTTP_SERVER_PORT_THINGSPEAK = 80
let HTTPS_SERVER_PORT_THINGSPEAK = 443
let HTTP_SERVER_PATH_FIELD1_THINGSPEAK = "/update?api_key=ICPZTSAEIMBWJDTK&field1=100"
HTTP_SERVER_PATH_FIELD8_THINGSPEAK = "/update?api_key=ICPZTSAEIMBWJDTK&field1=30,000300003&field2=100,0006000060001&field3=90,0009000090001&field4=120,001200012&field5=150,001500015&field6=180,001800018&field7=210,002100021&field8=240,002400024&"
// APEX HTTP local
let HTTP_SERVER_NAME_LOCAL_APEX = "192.168.0.4"
let HTTP_SERVER_PORT_LOCAL_APEX = 8080
let HTTPS_SERVER_PORT_LOCAL_APEX = 443
let HTTP_SERVER_PATH_FIELD1_LOCAL_APEX = "/ords/f?p=100:6::application_process=log_data_01:::p6_field1:-99.8"
let HTTP_SERVER_PATH_FIELD8_LOCAL_APEX = "/ords/f?p=100:6::application_process=log_data_01:::p6_field1,p6_field2,p6_field3,p6_field4,p6_field5,p6_field6,p6_field7,p6_field8:300030.0030003,600060.0060006,900090.0090009,1200120.0120012,1500150.0150015,1800180.0180018,2100210.0210021,2400240.0240024"
// APEX HTTPS Allways Free UK
let HTTP_SERVER_NAME_UK1_APEX = "g6d9abcb7cf856d-jegyed50db21c.adb.uk-london-1.oraclecloudapps.com"
let HTTP_SERVER_PORT_UK_APEX = 8080
let HTTPS_SERVER_PORT_UK_APEX = 443
let HTTP_SERVER_PATH_FIELD1_UK_APEX = "/ords/f?p=106:6::application_process=log_data_01:::p6_field1:-99.9"
let HTTP_SERVER_PATH_FIELD8_UK_APEX = "/ords/f?p=100:6::application_process=log_data_01:::p6_field1,p6_field2,p6_field3,p6_field4,p6_field5,p6_field6,p6_field7,p6_field8:300030.0030003,600060.0060006,900090.0090009,1200120.0120012,1500150.0150015,1800180.0180018,2100210.0210021,2400240.0240024"
// APEX HTTPS APEX_ORACLE_COM
let HTTP_SERVER_NAME_APEX_ORACLE_COM = "apex.oracle.com"
let HTTP_SERVER_PORT_APEX_ORACLE_COM = 8080
let HTTPS_SERVER_PORT_APEX_ORACLE_COM = 443
let HTTP_SERVER_PATH_FIELD1_APEX_ORACLE_COM = "/pls/apex/f?p=86511:6::application_process=log_data_01:::p6_field1:-44.4"
let HTTP_SERVER_PATH_FIELD8_APEX_ORACLE_COM = "/pls/apex/f?p=86511:6::application_process=log_data_01:::p6_field1,p6_field2,p6_field3,p6_field4,p6_field5,p6_field6,p6_field7,p6_field8:444444.0030003,600060.0060006,900090.0090009,1200120.0120012,1500150.0150015,1800180.0180018,2100210.0210021,2400240.0240024"
music.setVolume(255)
led.setBrightness(15)
led.plot(0, 0)
WiFiBit.connectToWiFiBit()
led.plot(0, 1)
led.plot(1, 0)
WiFiBit.connectToWiFiNetwork(AP_NAME_TARR, AP_PW_TARR)
led.plot(1, 1)
