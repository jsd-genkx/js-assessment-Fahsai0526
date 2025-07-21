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
    constructor(field = [[]]) {
        this.field = field;

        // Replace with your own code //
        // Set the home position at (0, 0) before the game starts
        this.positionRow = 0; // up down
        this.positionCol = 0; // left right
        this.field[this.positionRow][this.positionCol] = pathCharacter;
    }

    // Print field 
	print() {
		for (let field of this.field) {
			console.log(field);
	}
	};
    playGame() { 
        // ทำให้รับ input ได้
        while(true){
            const command = prompt("Which way? ");
            console.log(`your direction ${command}`);

        // ทำให้เดินได้
            if(command === "r") {
            this.moveRight();
            }
            else if(command === "l") {
            this.moveLeft();
            }
            else if(command === "u") {
            this.moveUp();
            }
            else if(command === "d") {
            this.moveDown();
            } else {
                console.log("you did not move correctly");
            }

		// กำหนดเงื่อนไข แพ้/ชนะ
			if (this.positionRow < 0 || this.positionRow >= this.field.length || this.positionCol < 0 || this.positionCol >= this.field[0].length) {
  		console.log('Out of field! Game Over.');
 		 break;
		}
		if (this.field[this.positionRow][this.positionCol] === hat) {
 		 console.log('You found your hat! You win!');
  		break;
		}
		if (this.field[this.positionRow][this.positionCol] === hole) {
  		console.log('You fell in a hole! Game Over.');
  		break;
		}
			console.log(this.field[this.positionRow][this.positionCol])
            this.field[this.positionRow][this.positionCol] = pathCharacter;

        // clear();
        // Replace with your own code //
       this.print(); // Please REMOVE this line before you start your code!
   
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
newGame.playGame();