var floatAge = prompt("Enter your age");
 floatAge = parseFloat (floatAge);
 var floatDays = (floatAge * 365.25).toFixed(2);
  floatDays = parseFloat(floatDays);
 var floatMonths= (floatAge * 12);
  floatMonths = parseFloat(floatMonths);
 var intWeeks= (floatDays / 7);
var intFortnights = (floatDays /14);
alert ("You are " + floatMonths +" approximate months.\n You are " +intFortnights+ "approximate fortnights.\n You are " +intWeeks+ " approximate weeks.\n You are " + floatDays +
" approximate days.");

