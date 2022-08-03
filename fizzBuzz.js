/* If number is divisible by 3 add Fizz to array; if number is divisible by 5 add Buzz to the array; otherwise add numbers sequentially.*/
var output=[];
var n=1;

function fizzBuzz(){


    if ((n%3===0) && (n%5===0)) { 
      output.push("FizzBuzz");
    }    
    
    else if (n%3===0) { 
      output.push("Fizz");
    }    
    else if (n%5===0) {
       output.push("Buzz");
    }
    else {
       output.push(n);

    }
        
      n++;
      console.log(output);
    
}

/* Test code */

for (let i = 0; i < 31; i++) {
  fizzBuzz();  
}
