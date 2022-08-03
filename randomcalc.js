

function loveCalculator() {
    
    var n = Math.random();

        n=n*100;

   
        return Math.floor(n)+1;

}


var cNumber=0;

prompt('Please enter first name:');
prompt('Please enter first name:');


cNumber=loveCalculator();
if (cNumber>=70) {
    alert("You are compatible with a score of " + cNumber);
}
else {
    alert("You are not compatible. Your score was, " + cNumber);
}
