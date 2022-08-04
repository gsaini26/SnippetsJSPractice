/*Lyrics to 99 bottles of beer on the wall to test while loop */

function bottledBeer(number) {
    var oneLess=number - 1;
    
    console.log(number + " bottles of beer on the wall. Take one down, pass it around, now you have " + oneLess + " bottles of beer on the wall.");
}

var beerNum = 99;

/*While loop version */
while (beerNum >= 1) {

    bottledBeer(beerNum);
    beerNum--;
}


/*For loop version */
for (beerNum=99; beerNum >= 1; beerNum--) {
    bottledBeer(beerNum);
}