//Simple function 
var $ = function (id) 
{
    return document.getElementById(id);
};

// accepts user input for the total number of the series


var generate = function () 
{
	var intCount, i, j, k, stringOutput;
    
    i=0;  // sets the first number in the Fibonacci series to 0
	j=1;  //sets the second number in the Fibonacci series to 1
	k;    //k is calculated by adding i+j and represents the next Fibonacci number
	stringOutput = i + " " + j;//initialize the Fibonacci series output 
    intCount = parseInt($("total_fib").value);  //gets user input from Dom
	
	//validate user input that intCount is a number
    //intCount is not less than 2
    //or intCount not greater than 100
    //create a loop
	// post it to the Dom
	if (isNaN(intCount) || intCount<1|| intCount>100)
    {
        $("total_fib").value = "";
        $("output").value = "Enter a valid input";
        alert ("Sorry, enter a number between 1 and 100");
    }
    else
    {
        while (intCount >2)
        {
            k=i+j;
            i=j;
            j=k;
            intCount--;
            stringOutput = stringOutput + " " + k;
        }
        $("output").value = stringOutput;
    }
};

// Push solution to Output through DOM

window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};