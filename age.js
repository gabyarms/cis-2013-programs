var floatAge = prompt("Enter your age");
 floatAge = parseFloat (floatAge);
 var floatDays = (floatAge * 365.25).toFixed(2);
  floatDays = parseFloat(floatDays);
 var floatMonths= (floatAge * 12).toFixed(2);
  floatMonths = parseFloat(floatMonths);
 var intWeeks= (floatDays / 7).toFixed(2);
var intFortnights = (floatDays /14).toFixed(2);
alert ("You are " + floatMonths +" approximate months.\nYou are " +intFortnights+ "approximate fortnights.\nYou are " +intWeeks+ " approximate weeks.\nYou are " + floatDays +
" approximate days.");

