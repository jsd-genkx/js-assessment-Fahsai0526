"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field = []) {
        this.field = field;

        // Replace with your own code //
        // Set the home position at (0, 0) before the game starts
        this.positionRow = 0; // up down
        this.positionCol = 0; // left right
        this.field[this.positionRow][this.positionCol] = pathCharacter;
    }

    // Print field 
        print() { 
        // ทำให้รับ input ได้
        while(true){
            const command = prompt("input :");
            console.log(`your input ${command}`);
        
        // ทำให้เดินได้
            if(command === "r") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.moveRight();
            console.log(this.positionCol);
            }
            else if(command === "l") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.moveLeft();
            console.log(this.positionCol);
            }
            else if(command === "u") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.moveUp();
            console.log(this.positionRow);
            }
            else if(command === "d") {
            console.log(this.positionRow);
            console.log(this.positionCol);
            this.moveDown();
            console.log(this.positionRow);
            } else {
                console.log("you did not move correctly");
            }

            this.field[this.positionRow][this.positionCol] = pathCharacter;
        // clear();
        // Replace with your own code //
        console.log(this.field); // Please REMOVE this line before you start your code!
    }
    }
    // movement function
    moveRight() {
        this.positionCol++;
    }
    moveLeft() {
        this.positionCol--;
    }
    moveUp() {
        this.positionRow--;
    }
    moveDown() {
        this.positionRow++;
    }
    // กำหนดเงื่อนไข แพ้/ชนะ

    // Your Code //
}
// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
    ["░", "░", "O"],
    ["░", "O", "░"],
    ["░", "^", "░"],
]);
newGame.print();
