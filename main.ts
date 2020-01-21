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
    }
    export enum patternType {
        //% block="32*32"
        type4 = 0xc3
    }
    export enum imageType {
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
    let array0: number[]
    array0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 31, 0, 0, 0, 63, 128, 0, 0, 127, 0, 0, 0, 255, 0, 0, 1, 246, 0, 0, 3, 236, 0, 0, 7, 204, 0, 0, 7, 216, 0, 0, 15, 248, 0, 0, 12, 112, 0, 0, 0, 96, 0, 0, 56, 192, 0, 0, 124, 48, 0, 0, 124, 240, 0, 0, 255, 240, 0, 0, 223, 128, 0, 0, 31, 192, 0, 0, 3, 192, 0, 0, 31, 128, 0, 0, 31, 128, 0, 0, 1, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let array1: number[]
    array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 63, 224, 0, 0, 119, 248, 0, 0, 231, 252, 0, 1, 207, 238, 0, 1, 255, 238, 0, 1, 255, 255, 0, 1, 4, 127, 0, 0, 128, 7, 0, 0, 0, 3, 0, 0, 33, 194, 0, 0, 3, 240, 0, 0, 3, 248, 0, 0, 1, 160, 0, 0, 29, 192, 0, 0, 11, 248, 0, 0, 1, 232, 0, 0, 5, 192, 0, 0, 6, 192, 0, 0, 0, 64, 0, 0, 0, 112, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let array2: number[]
    array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 192, 0, 0, 3, 224, 0, 0, 3, 248, 0, 0, 1, 112, 0, 0, 29, 128, 0, 0, 31, 144, 0, 0, 1, 252, 0, 0, 1, 192, 0, 0, 7, 192, 0, 0, 6, 64, 0, 0, 0, 96, 0, 0, 0, 112, 0, 0, 0, 0, 0]
    let array3: number[]
    array3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 255, 255, 252, 15, 255, 255, 248, 3, 255, 255, 224, 1, 255, 255, 192, 0, 255, 255, 0, 0, 127, 254, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    export enum mycharacter {
        //%block="parachute1"
        type1 = 1,
        //%block="parachute2"
        type2 = 2,
        //%block="parachute3"
        type3 = 3,
        //%block="boat"
        type4 = 4,
    }
    //% blockId="character" block="%del"
    //weight=95 blockGap=0  advanced=true
    export function delimiters(del: mycharacter): number[] {
        switch (del) {
            case mycharacter.type1: return array0;
            case mycharacter.type2: return array1;
            case mycharacter.type3: return array2;
            case mycharacter.type4: return array3;
        }
    }
    /** 
     * Setup Lumex Oled Tx Rx to micro:bit pins.
     * 設定Lumex Oled的Tx、Rx連接腳位
     * @param pinRX to pinRX ,eg: SerialPin.P14
     * @param pinTX to pinTX ,eg: SerialPin.P13
    */
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

    //% weight=94 blockGap=0
    export function OLED_display(): void {
        let myBuff1 = pins.createBuffer(1)
        myBuff1.setNumber(NumberFormat.UInt8BE, 0, 0xd1)
        serial.writeBuffer(myBuff1)
        serial.readUntil("E")
        basic.pause(10)
    }
    //% blockId="OLED_clear" block="OLED clear"
    //% weight=93 blockGap=0
    export function OLED_clear(): void {
        let myBuff1 = pins.createBuffer(1)
        myBuff1.setNumber(NumberFormat.UInt8BE, 0, 0xd0)
        serial.writeBuffer(myBuff1)
        //serial.readUntil("E")
        basic.pause(20)
    }
    //% blockId="OLED_on" block="turn OLED on"
    //% weight=92 blockGap=0
    export function OLED_on(): void {
        let myBuff1 = pins.createBuffer(1)
        myBuff1.setNumber(NumberFormat.UInt8BE, 0, 0xf1)
        serial.writeBuffer(myBuff1)
        serial.readUntil("E")
        basic.pause(10)
    }
    //% blockId="OLED_off" block="turn OLED off"
    //% weight=91 blockGap=0
    export function OLED_off(): void {
        let myBuff1 = pins.createBuffer(1)
        myBuff1.setNumber(NumberFormat.UInt8BE, 0, 0xf0)
        serial.writeBuffer(myBuff1)
        serial.readUntil("E")
        basic.pause(10)
    }





    let cID = 0;
    let countID = 0;
    //% blockId="OLED_setImage" block="set character: %myArray|image type: %myType|positive or negative %myPositive|to OLED memory image ID: %myID"
    //% weight=83 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 
    export function OLED_setImage(myArray: number[], myType: patternType, myPositive: positiveType, myID: number): void {
        let myBuff2 = pins.createBuffer(2)
        let myBuff1 = pins.createBuffer(1)
        myBuff2.setNumber(NumberFormat.UInt8BE, 0, myType)
        myBuff2.setNumber(NumberFormat.UInt8BE, 1, myID)
        cID = myID;
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
        //basic.pause(10)
    }
    //% blockId="setImage" block="set character: %myArray"
    //% weight=50 blockGap=0 blockExternalInputs=true
    export function setImage(myArray: number[]): void {
        if (myArray == array0)
            countID = mycharacter.type1;
        else if (myArray == array1)
            countID = mycharacter.type2;
        else if (myArray == array2)
            countID = mycharacter.type3;
        else if (myArray == array3)
            countID = mycharacter.type4;
        OLED_setImage(myArray, 0xc3, 1, countID);
    }







    //% blockId="OLED_showImage" block="show image type: %myType|image ID: %myID|on x: %x|y: %y|display %showState"
    //% weight=82 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 
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
    /*
    //% blockId="game_xy" block="Set character: %character|x-axis: %x|y-axis: %y"
    //% weight=98 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 advanced=true inlineInputMode=inline
    export function game_xy(myType: imageType, myID: number, x: number, y: number, showState: showNow): void {
        let myBuff4 = pins.createBuffer(4)
        myBuff4.setNumber(NumberFormat.UInt8BE, 0, myID)
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
    */
    let count: number[]
    count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    //% blockId="move" block="character: %character's x-axis: %x| y-axis: %y"
    //% weight=49 blockGap=0
    export function move(character: number[], x: number, y: number): void {
        if (character == array0)
            cID = mycharacter.type1;
        else if (character == array1)
            cID = mycharacter.type2;
        else if (character == array2)
            cID = mycharacter.type3;
        else if (character == array3)
            cID = mycharacter.type4;
        /* 
        if(count[cID]==0)
         {
             OLED_setImage(character, 0xc3, 1, cID);
             count[cID]++;
         }
         */
        OLED_showImage(0xc7, cID, x, y, 0xd1);
    }
    let y = 0;
    let mode = 0;
    export function rand(xr: number): number {
        if (xr + 20 > 100)
            mode = Math.randomRange(1, 2);
        else if (xr - 20 < 0)
            mode = Math.randomRange(2, 3);
        else
            mode = Math.randomRange(1, 3);
        if (mode == 1)
            return xr - 20;
        else if (mode == 2)
            return xr;
        else
            return xr + 20;
    }
    let charID = 0;
    export function judge(n: number[]): number{
        if (n == array0)
        {
            charID = mycharacter.type1;
            return charID;
        }
        else if (n == array1)
        {
            charID = mycharacter.type2;
            return charID;
        }
            
        else if (n == array2)
        {
            charID = mycharacter.type3;
            return charID;
        }
        else 
        {
            charID = mycharacter.type4;
            return charID;
        }   
    }
    //% blockId="movetest" block="character1: %character1 character2: %character2 character3: %character3 start-x: %x"
    //% weight=50 blockGap=0
    export function movetest(character1: number[], character2: number[], character3: number[], x: number): void {
        cID = judge(character1);
        OLED_showImage(0xc7, cID, x, y, 0xd1);
        basic.pause(200);
        lumexoled.OLED_clear();
        x = rand(x); y = 5;
        OLED_showImage(0xc7, cID, x, y, 0xd1);
        basic.pause(200);
        lumexoled.OLED_clear();
        x = rand(x); y = 10;
        cID = judge(character2);
        OLED_showImage(0xc7, cID, x, y, 0xd1);
        basic.pause(200);
        lumexoled.OLED_clear();
        x = rand(x); y = 15;
        OLED_showImage(0xc7, cID, x, y, 0xd1);
        basic.pause(200);
        lumexoled.OLED_clear();
        x = rand(x); y = 20;
        cID = judge(character3);
        OLED_showImage(0xc7, cID, x, y, 0xd1);
        basic.pause(200);
        lumexoled.OLED_clear();
        y = 0;
    }
}
