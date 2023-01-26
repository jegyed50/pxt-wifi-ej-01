//pxt-WiFi-EJ-01 main
//Eredeti: https://github.com/SolderedElectronics/pxt-wifi
// Kódod hozzáadása itt
/*******************************************************************************
 * Functions for Telegram
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/


namespace WiFiBit {
    // Flag to indicate whether the SSL message was sent successfully.
    let SSLMessageSent = false
    let rxData = ""



    /**
     * Send AT command and wait for response.
     * Return true if expected response is received.
     * @param command The AT command without the CRLF.
     * @param expected_response Wait for this response.
     * @param timeout Timeout in milliseconds.
     */
  
    export function sendCommand(command: string, expected_response: string = null, timeout: number = 100): boolean {
        // Wait a while from previous command.
        basic.pause(10)

        // Flush the Rx buffer.
        serial.readString()
        rxData = ""

        // Send the command and end with "\r\n".
        serial.writeString(command + "\r\n")

        // Don't check if expected response is not specified.
        if (expected_response == null) {
            return true
        }

        // Wait and verify the response.
        let result = false
        let timestamp = input.runningTime()
        while (true) {
            // Timeout.
            if (input.runningTime() - timestamp > timeout) {
                result = false
                break
            }

            // Read until the end of the line.
            rxData += serial.readString()
            if (rxData.includes("\r\n")) {
                // Check if expected response received.
                if (rxData.slice(0, rxData.indexOf("\r\n")).includes(expected_response)) {
                    result = true
                    break
                }

                // If we expected "OK" but "ERROR" is received, do not wait for timeout.
                if (expected_response == "OK") {
                    if (rxData.slice(0, rxData.indexOf("\r\n")).includes("ERROR")) {
                        result = false
                        break
                    }
                }

                // Trim the Rx data before loop again.
                rxData = rxData.slice(rxData.indexOf("\r\n") + 2)
            }
        }

        return result
    }

    /**
         * Send AT command and wait for response.
         * Return true if expected response is received.
         * @param command The AT command without the CRLF.
         * @param expected_response Wait for this response.
         * @param timeout Timeout in milliseconds.
         */
    //% weight=30
    //% blockGap=8
    //% blockId=esp8266_send_command
    //% block="sendATCommand:command string %command|expected response %expected_response|timeout %timeout"
    export function sendCommand2(command: string, expected_response: string = null, timeout: number = 100) 
    {
        // Wait a while from previous command.
        basic.pause(10)

        // Flush the Rx buffer.
        serial.readString()
        rxData = ""

        // Send the command and end with "\r\n".
        serial.writeString(command + "\r\n")

        // Don't check if expected response is not specified.
        if (expected_response == null) {
            return 
        }

        // Wait and verify the response.
        let result = false
        let timestamp = input.runningTime()
        while (true) {
            // Timeout.
            if (input.runningTime() - timestamp > timeout) {
                result = false
                break
            }

            // Read until the end of the line.
            rxData += serial.readString()
            if (rxData.includes("\r\n")) {
                // Check if expected response received.
                if (rxData.slice(0, rxData.indexOf("\r\n")).includes(expected_response)) {
                    result = true
                    break
                }

                // If we expected "OK" but "ERROR" is received, do not wait for timeout.
                if (expected_response == "OK") {
                    if (rxData.slice(0, rxData.indexOf("\r\n")).includes("ERROR")) {
                        result = false
                        break
                    }
                }

                // Trim the Rx data before loop again.
                rxData = rxData.slice(rxData.indexOf("\r\n") + 2)
            }
        }

       return 
    }

    /**
     * Return true if the SSL message was sent successfully.
     */
    //% weight=30
    //% blockGap=8
    //% blockId=esp8266_is_SSL_message_sent
    //% block="SSL message sent"
    export function isSSLMessageSent(): boolean {
        return SSLMessageSent
    }



    /**
     * SSL_GET
     * @param SERVER_NAME_OR_IP SERVER_NAME_OR_IP
     * @param URL_PATH Az URL szerver név vagy IP cím utáni része
     * 
     */
    //% weight=29
    //% blockGap=8
    //% blockId=TCP_OR_SSL
    //% block="GET TCP_OR_SSL:Execute method %METHOD| SERVER_NAME_OR_IP %SERVER_NAME_OR_IP| HTTP (TCP) or HTTPS (SSL/TLS) %TCP_OR_SSL| SERVER_PORT %SERVER_PORT|Server Path %URL_PATH"
    export function SSL_GET_EJ(method: HttpMethod,SERVER_NAME_OR_IP: string, TCP_OR_SSL:TCPorSSL ,SERVER_PORT: number, URL_PATH: string) {
        let myMethod: string
 
        switch (method) {
            case HttpMethod.GET: myMethod = "GET"; break;
            case HttpMethod.POST: myMethod = "POST"; break;
            case HttpMethod.PUT: myMethod = "PUT"; break;
            case HttpMethod.HEAD: myMethod = "HEAD"; break;
            case HttpMethod.DELETE: myMethod = "DELETE"; break;
            case HttpMethod.PATCH: myMethod = "PATCH"; break;
            case HttpMethod.OPTIONS: myMethod = "OPTIONS"; break;
            case HttpMethod.CONNECT: myMethod = "CONNECT"; break;
            case HttpMethod.TRACE: myMethod = "TRACE";
        }
        let myTCPorSSL: string
        switch (TCP_OR_SSL) {
            case TCPorSSL.TCP: myTCPorSSL = "TCP"; break;
            case TCPorSSL.SSL: myTCPorSSL = "SSL";
        }
        // Reset the upload successful flag.
        SSLMessageSent = false

        // Make sure the WiFi is connected.
        //if (isWifiConnected() == false) return

        // Connect to HTTPS Server. Return if failed.
        //    if (sendCommand("AT+CIPSTART=\"SSL\",\"" + SERVER_NAME_OR_IP + "\", + SERVER_PORT +\", null, 10000) == false) return
        if (myTCPorSSL == 'TCP'){
            sendCommand("AT+CIPSTART=\"SSL\",\"" + SERVER_NAME_OR_IP + "\",443", "OK", 10000)
        }
        else{
            sendCommand("AT+CIPSTART=\"SSL\",\"" + SERVER_NAME_OR_IP + "\",443", "OK", 10000)
        }
       
        // apex.oracle.com
        // /pls/apex/f?p=86511:6::application_process=log_data_01:::p6_field1,p6_field2,p6_field3,p6_field4,p6_field5,p6_field6,p6_field7,p6_field8:300030.0030003,600060.0060006,900090.0090009,1200120.0120012,1500150.0150015,1800180.0180018,2100210.0210021,2400240.0240024

        // g6d9abcb7cf856d-jegyed50db21c.adb.uk-london-1.oraclecloudapps.com
        // /ords/f?p=106:6::application_process=log_data_01:::p6_field1:-99.9
        // Construct the data to send.
        let data = "GET " + URL_PATH
        data += " HTTP/1.1\r\n"
        data += "Host: " + SERVER_NAME_OR_IP + "\r\n"




        // Send the data.
        sendCommand("AT+CIPSEND=" + (data.length + 2))
        sendCommand(data)
        /*
                // Return if "SEND OK" is not received.
                if (getResponse("SEND OK", 1000) == "") {
                    // Close the connection and return.
                    sendCommand("AT+CIPCLOSE", "OK", 1000)
                    return
                }
        
                // Validate the response from Telegram.
                let response = getResponse("\"ok\":true", 1000)
                if (response == "") {
                    // Close the connection and return.
                    sendCommand("AT+CIPCLOSE", "OK", 1000)
                    return
                }
        
                // Close the connection.
                sendCommand("AT+CIPCLOSE", "OK", 1000)
        */
        // Set the upload successful flag and return.
        SSLMessageSent = true
        return
    }

}
