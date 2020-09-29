var floatMiles = prompt("Enter miles driven");
floatMiles = parseFloat (miles);    
var floatGallons = prompt("Enter gallons of gas used");
floatGallons = parseFloat(gallons); 
var floatMpg = (floatMiles/floatGallons);
alert ("Miles per gallon=" + floatMpg); 