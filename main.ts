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
    /*
    let oArray = new Array(3);
    oArray[0]=2,oArray[1]=3,oArray[2]=7;
     */
 //   let array0: number[]
  //       array0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 31, 0, 0, 0, 63, 128, 0, 0, 127, 0, 0, 0, 255, 0, 0, 1, 246, 0, 0, 3, 236, 0, 0, 7, 204, 0, 0, 7, 216, 0, 0, 15, 248, 0, 0, 12, 112, 0, 0, 0, 96, 0, 0, 56, 192, 0, 0, 124, 48, 0, 0, 124, 240, 0, 0, 255, 240, 0, 0, 223, 128, 0, 0, 31, 192, 0, 0, 3, 192, 0, 0, 31, 128, 0, 0, 31, 128, 0, 0, 1, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //  let array1: number[]
   //      array1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 63, 224, 0, 0, 119, 248, 0, 0, 231, 252, 0, 1, 207, 238, 0, 1, 255, 238, 0, 1, 255, 255, 0, 1, 4, 127, 0, 0, 128, 7, 0, 0, 0, 3, 0, 0, 33, 194, 0, 0, 3, 240, 0, 0, 3, 248, 0, 0, 1, 160, 0, 0, 29, 192, 0, 0, 11, 248, 0, 0, 1, 232, 0, 0, 5, 192, 0, 0, 6, 192, 0, 0, 0, 64, 0, 0, 0, 112, 0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //  let array2: number[]
   //      array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 192, 0, 0, 3, 224, 0, 0, 3, 248, 0, 0, 1, 112, 0, 0, 29, 128, 0, 0, 31, 144, 0, 0, 1, 252, 0, 0, 1, 192, 0, 0, 7, 192, 0, 0, 6, 64, 0, 0, 0, 96, 0, 0, 0, 112, 0, 0, 0, 0, 0]
    
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
       // let array0 = new Array();
       //array0[0]= 2, array0[1]= 5, array0[2]= 7, array0[3]= 9, array0[4]= 0, array0[5]= 0, array0[6]= 0, array0[7]= 0, array0[8]= 0, array0[9]= 0;
       var src = "1,2,5,4,3";
       var array0 = src.split(',').map(parseInt);
        var src1 = "1,3,5,4,3,5,6";
       var array1 = src1.split(',').map(parseInt);
       var array2 = ['10','1','100'].map(function(x) { return parseInt(x); });
        switch(del) { 
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
    //% blockId="OLED_putString" block="OLED put string: %myStr|size: %mySize|on line: %line|column: %column|display %showState"
    //% weight=85 blockGap=0 blockExternalInputs=true line.min=0 line.max=7 column.min=0 column.max=20
    export function putString(myStr: string, mySize: fontSize, line: number, column: number, showState: showNow): void {
        if (myStr.length > 0) {
            //sending = true
            let maxLength = myStr.length
            if (maxLength > 16)
                maxLength = 16
            let myBuff = pins.createBuffer(maxLength + 3)
            myBuff.setNumber(NumberFormat.UInt8BE, 0, mySize)
            myBuff.setNumber(NumberFormat.UInt8BE, 1, line)
            myBuff.setNumber(NumberFormat.UInt8BE, 2, column)
            for (let i = 0; i < maxLength; i++) {
                myBuff.setNumber(NumberFormat.UInt8BE, i + 3, myStr.charCodeAt(i))
            }
            serial.writeBuffer(myBuff)
            serial.readUntil("E")
            basic.pause(10)
            if ((myStr.length > 16) && (mySize == 0x81)) {
                myStr = myStr.substr(16)
                maxLength = myStr.length
                if (maxLength > 16)
                    maxLength = 16
                myBuff = pins.createBuffer(maxLength + 3)
                myBuff.setNumber(NumberFormat.UInt8BE, 0, mySize)
                myBuff.setNumber(NumberFormat.UInt8BE, 1, line)
                myBuff.setNumber(NumberFormat.UInt8BE, 2, column + 16)
                for (let i = 0; i < maxLength; i++) {
                    myBuff.setNumber(NumberFormat.UInt8BE, i + 3, myStr.charCodeAt(i))
                }
                serial.writeBuffer(myBuff)
                serial.readUntil("E")
                basic.pause(10)
            }
            if (showState == 0xd1) {
                OLED_display()
            }
        }
    }
    //% blockId="OLED_putNumber" block="OLED put number: %myNumber|size: %mySize|on line: %line|column: %column|display %showState"
    //% weight=84 blockGap=0 blockExternalInputs=true line.min=0 line.max=7 column.min=0 column.max=20
    export function putNumber(myNumber: number, mySize: fontSize, line: number, column: number, showState: showNow): void {
        putString(myNumber.toString(), mySize, line, column, showState)
    }
    //% blockId="OLED_setImage" block="set image array %myArray|image type: %myType|positive or negative %myPositive|to OLED memory image ID: %myID"
    //% weight=83 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 advanced=true
    export function OLED_setImage(myArray: number[] , myType: patternType, myPositive: positiveType, myID: number): void {
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
       //% blockId="game_xy" block="Set character: %character|x-axis: %x|y-axis: %y"
    //% weight=98 blockGap=0 blockExternalInputs=true myID.min=0 myID.max=9 advanced=true inlineInputMode=inline
    export function game_xy(myID: number, x: number, y: number): void {
        let myBuff4 = pins.createBuffer(3)
        myBuff4.setNumber(NumberFormat.UInt8BE, 0, myID)
        myBuff4.setNumber(NumberFormat.UInt8BE, 1, x)
        myBuff4.setNumber(NumberFormat.UInt8BE, 2, y)
        serial.writeBuffer(myBuff4)
        serial.readUntil("E")
        basic.pause(10)
    }
}   
