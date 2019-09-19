/**
* LUMEX OLED顯示器的函數
*/

//% weight=0 color=#ff9933 icon="\uf109" block="Game&Watch"
namespace lumexoled {
    export enum fontSize {
        //% block="5*7"
        smallSize = 0x81,
        //% block="8*16"
        bigSize = 0x83
    }
    export enum showNow {
        //% block="now"
        yes = 0xd1,
        //% block="later"
        no = 0x00
    }
    export enum patternType {
        //% block="8*8"
        type1 = 0xc0,
        //% block="8*16"
        type2 = 0xc1,
        //% block="16*16"
        type3 = 0xc2,
        //% block="32*32"
        type4 = 0xc3
    }
    export enum imageType {
        //% block="8*8"
        type1 = 0xc4,
        //% block="8*16"
        type2 = 0xc5,
        //% block="16*16"
        type3 = 0xc6,
        //% block="32*32"
        type4 = 0xc7
    }
    export enum positiveType {
        //% block="positive"
        type1 = 1,
        //% block="negative"
        type2 = 0
    }
    export enum filledType {
        //% block="no"
        type1 = 0,
        //% block="yes"
        type2 = 1
    }
    export enum transitionType {
        //% block="upward"
        type1 = 0,
        //% block="downward"
        type2 = 1,
        //% block="leftward"
        type3 = 2,
        //% block="rightward"
        type4 = 3
    }
    export enum moveType {
        //% block="inside out"
        type1 = 0,
        //% block="outside in"
        type2 = 1
    }
   //% blockId="OLED_setSerial" block="set OLED RX to %pinRX|TX to %pinTX|BaudRate %br"
    //% weight=100 blockExternalInputs=true blockGap=0
    export function OLED_setSerial(pinRX: SerialPin, pinTX: SerialPin, br: BaudRate): void {
        basic.pause(100)
        serial.redirect(
            pinRX,
            pinTX,
            br
        )
        serial.readUntil("E")
        basic.pause(100)
        OLED_clear()
    }

    //% blockId="OLED_setImage" block="set image array %myArray|image type: %myType|positive or negative %myPositive|to OLED memory image ID: %myID"

    //% weight=83 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 advanced=true

    export function OLED_setImage(myArray: number[], myType: patternType, myPositive: positiveType, myID: number): void {

        let myBuff2 = pins.createBuffer(2)

        let myBuff1 = pins.createBuffer(1)

        myBuff2.setNumber(NumberFormat.UInt8BE, 0, myType)

        myBuff2.setNumber(NumberFormat.UInt8BE, 1, myID)

        serial.writeBuffer(myBuff2)

        //serial.readUntil("E")

        //basic.pause(10)

        for (let i = 0; i <= myArray.length - 1; i++) {

            myBuff1.setNumber(NumberFormat.UInt8BE, 0, (myPositive == 1 ? myArray[i] : 0xff - myArray[i]))

            serial.writeBuffer(myBuff1)

            //serial.readUntil("E")

            //basic.pause(10)

        }

        serial.readUntil("E")

        basic.pause(10)

    }



    //% blockId="OLED_showImage" block="show image type: %myType|image ID: %myID|on x: %x|y: %y|display %showState"

    //% weight=82 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 advanced=true

    export function OLED_showImage(myType: imageType, myID: number, x: number, y: number, showState: showNow): void {

        let myBuff4 = pins.createBuffer(4)

        myBuff4.setNumber(NumberFormat.UInt8BE, 0, myType)

        myBuff4.setNumber(NumberFormat.UInt8BE, 1, x)

        myBuff4.setNumber(NumberFormat.UInt8BE, 2, y)

        myBuff4.setNumber(NumberFormat.UInt8BE, 3, myID)

        serial.writeBuffer(myBuff4)

        serial.readUntil("E")

        basic.pause(10)

        if (showState == 0xd1) {

            OLED_display()

        }

    }

}
