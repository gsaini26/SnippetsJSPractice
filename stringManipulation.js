//string manipulation practice in javaScript

var myName;
var restName;
var firstLetter;

myName = prompt("What is your name?");
//change the first letter to uppercase
firstLetter=myName.slice(0,1);
firstLetter=firstLetter.toUpperCase();

//get rest of the name
restName=myName.slice(1,myName.length);

//edge case if uppercase was added after first letter
//print out the name with first letter uppercase rest lowercase
alert(firstLetter + restName.toLowerCase());