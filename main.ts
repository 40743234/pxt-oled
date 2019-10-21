/**
* LUMEX OLED顯示器的函數
*/
//% weight=0 color=#ff9933 icon="\uf109" block="Game&Watch"
namespace lumexoled {
    
    //export let par: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 63, 224, 0, 0, 119, 248, 0, 0, 231, 252, 0, 1, 207, 238, 0, 1, 255, 238, 0, 1, 255, 255, 0, 1, 4, 127, 0, 0, 128, 7, 0, 0, 0, 3, 0, 0, 33, 194, 0, 0, 3, 240, 0, 0, 3, 248, 0, 0, 1, 160, 0, 0, 29, 192, 0, 0, 11, 248, 0, 0, 1, 232, 0, 0, 5, 192, 0, 0, 6, 192, 0, 0, 0, 64, 0, 0, 0, 112, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    
    export enum fontSize {
        //% block="5*7"
        smallSize = 0x81,
        //% block="8*16"
        bigSize = 0x83
    }
    export enum showNow {
        //% block="now"
        yes = 0xd1,
    }
    export enum patternType {
        //% block="16*16"
        type3 = 0xc2,
        //% block="32*32"
        type4 = 0xc3
    }
    export enum imageType {
        //% block="16*16"
        type3 = 0xc6,
        //% block="32*32"
        type4 = 0xc7
    }
    export enum positiveType {
        //% block="positive"
        type1 = 1,
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
       enum mycharacter {
        //%block="parachute1"
        type1=1,
        //%block="parachute2"
        type2=2,
        //%block="parachute3"
        type3=3,
    }
    //% blockId="character" block="%del"
    //weight=9
    export function delimiters(del : mycharacter) : number[] {
        switch(del) {
        let array0: number[]
          array0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 31, 0, 0, 0, 63, 128, 0, 0, 127, 0, 0, 0, 255, 0, 0, 1, 246, 0, 0, 3, 236, 0, 0, 7, 204, 0, 0, 7, 216, 0, 0, 15, 248, 0, 0, 12, 112, 0, 0, 0, 96, 0, 0, 56, 192, 0, 0, 124, 48, 0, 0, 124, 240, 0, 0, 255, 240, 0, 0, 223, 128, 0, 0, 31, 192, 0, 0, 3, 192, 0, 0, 31, 128, 0, 0, 31, 128, 0, 0, 1, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let array1: number[]
          array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 63, 224, 0, 0, 119, 248, 0, 0, 231, 252, 0, 1, 207, 238, 0, 1, 255, 238, 0, 1, 255, 255, 0, 1, 4, 127, 0, 0, 128, 7, 0, 0, 0, 3, 0, 0, 33, 194, 0, 0, 3, 240, 0, 0, 3, 248, 0, 0, 1, 160, 0, 0, 29, 192, 0, 0, 11, 248, 0, 0, 1, 232, 0, 0, 5, 192, 0, 0, 6, 192, 0, 0, 0, 64, 0, 0, 0, 112, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let array2: number[]
          array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 192, 0, 0, 3, 224, 0, 0, 3, 248, 0, 0, 1, 112, 0, 0, 29, 128, 0, 0, 31, 144, 0, 0, 1, 252, 0, 0, 1, 192, 0, 0, 7, 192, 0, 0, 6, 64, 0, 0, 0, 96, 0, 0, 0, 112, 0, 0, 0, 0, 0];
         case mycharacter.type1: return array0;
         case mycharacter.type2: return array1;
         case mycharacter.type3: return array2;
    }
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
    //% blockId="OLED_display" block="OLED display"
    //% weight=94 blockGap=0
    export function OLED_display(): void {
        let myBuff1 = pins.createBuffer(1)
        myBuff1.setNumber(NumberFormat.UInt8BE, 0, 0xd1)
        serial.writeBuffer(myBuff1)
        serial.readUntil("E")
        basic.pause(10)
    }
}
