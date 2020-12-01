//initialize variables

 

var intMax, intMin, intRandom, intGuess, intCount;

 

//enter and test the minimum value

 

intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range: "));

 

while (isNaN(intMin)||intMin<0)

{

        intMin = parseInt(prompt("I'm sorry but your lowest number choice was invalid.  Choose the lowest number in range."));

}

 

//enter and test the maximum value

 

intMax = parseInt(prompt("Choose the highest number in your guessing range that must be 2 more than” + intMin"));

 

while (isNaN(intMax)||intMax<=(intMin+1))

{

        intMax = parseInt(prompt("I'm sorry but your highest number choice was invalid.  Choose highest number in range:”));

}

 

//Create the random number for the program.

 

intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);

 

// set the loop counter

intCount = 1;

 

//enter and test the maximum value

 

intGuess = parseInt(prompt("What is your guess on the random number between " + intMin + " and " + intMax));

 

while (isNaN(intGuess)||intGuess < intMin|| intGuess > intMax)

{

        intGuess = parseInt(prompt("I'm sorry but your number guess was invalid. Please send new guess between" + intMin + " and " + intMax));

}

 

 

//loop to compare guess against the random number


while (intGuess != intRandom)

{

        if (intGuess < intRandom)

        {

               alert ("Your choice of " + intGuess + " too low! Please try again.");

        }

        else

        {

               alert ("Your choice of " + intGuess + " too high! Please try again.");

        }

        intCount++;

        intGuess = parseInt(prompt("What is your guess on the random number between\n " +

                       intMin + " and " + intMax));

        while (isNaN(intGuess)||intGuess < intMin|| intGuess > intMax)

        {

               intGuess = parseInt(prompt("I'm sorry but your number guess was invalid.  What is your guess on the random number between" + intMin + " and " + intMax));

        }

       

}

 

// provides final output upon successful guessing

 

alert("Congratulations!!! You guessed the correct number (" + intRandom +")+ " and it only took you " + intCount + " attempts!");

 
