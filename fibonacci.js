/* Fibonacci Generator 0,1,1,2,3, 5, 8, 13, 21, 34, 55, 89, 144...*/
/* 0+1=1*/
/* 1+1=2*/
/* 1+2=3*/
/* 2+3=5*/

/* Algorithm*/

/* first number + second number = result */


/* first number = second number; and second number = result */
/* loop until the length of the sequence required */

function fibonacciGenerator(n) {
    

    var firstNum = 0;
    var secondNum = 1;
    var result= 0;
    var output=[0,1];


    if (n===1) {
        output=[0];
        
    }
    else if (n===2) {
        output=[0,1];
        
    }
    else if (n===0) {
        output=[];
        
    }
    else if (n>2){
        
        for (i=3; i<=n; i++) {
        
          result = firstNum + secondNum;
          firstNum = secondNum;  
          secondNum = result;
          output.push(result);
        }
    }   
   
    
    console.log(output.length);
    return(output);
}    

/* Test input */

console.log(fibonacciGenerator(3));


