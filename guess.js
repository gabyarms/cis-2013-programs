/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */

var intMax;
var intMin = window.prompt("Enter an integer greater than 0", "1");
var intRandom;
var intGuess;
var count;
var num1;
var num2;
var iter;
var iter2;
var rand;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/
/* initialize variables for while loop*/
iter=0;
iter2=0;
// while loop to make user input an integer for first input
while(iter==0){
num1 = parseInt(intMin);
// test that input is an interger
if(isNaN(num1)) {
    window.alert("Input was not an integer");
    intMin = window.prompt("Enter an integer greater than 0", "1");
} else {
    intMax = window.prompt("Choose the higher number in range.");
}
while(iter2==0) {
    num2= parseInt(intMax);
    var testNum= num1+2;
    if(isNaN(num2)) {
        window.alert("Input is not an integer");
        intMax= window.prompt("Choose a number 2 greater than minimum.");
    }
    else {
        //nested if statement to make sure input is 2 greater
        if(num2<=testNum) {
            intMax= window.prompt("Choose a number 2 greater than minimum.");
        } else {
            //change values of flag variables to break out of loop
            iter2 = 1;
            iter =1;
        }
    }
}
// instantiate rand with collected values

rand= parseInt(Math.floor(Math.random()*(num2-num1+1))+num1);
count = 0;
var iter3 = 0;
// while loop to take user guesses
while(iter3==0){
    intGuess = window.prompt("Enter your guess of the random number between the numbers");
    var guess = parseInt(intGuess);
    //test
    if(guess != rand) {
        if (guess < rand) {
            count+=1; //increment
            intGuess = window.alert("Your guess was too low.Try again!");
        } if(guess > rand) {
            count+=1; //increment
            intGuess = window.alert("Your guess was too high.Try again!");
        } else {
            window.alert("You guessed the number in "+count+" tries");
            break; //exit while loop
        }
        
    }
}








// set the loop counter



/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/






/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 
 
 
 
 
 
 
 

// provides final output upon successful guessing

