function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    
    /* Generate a random number */
    var personPaying = Math.floor(Math.random() * names.length);
    
    return names[personPaying] + " is going to buy lunch today!";
    
    


/******Don't change the code below*******/    
}

var nameList=["Cindy", "Mindy", "George", "Lukas", "Skywalker", "R2D2"];

whosPaying(nameList);

