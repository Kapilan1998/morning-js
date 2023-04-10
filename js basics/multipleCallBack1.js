// The multiply function accepts two parameteers
function multiply(a, b, callback1, callback2)
{
    var result = a * b;
    callback1(result, callback2); //callback2 is passed as parameter to callback1
}

function ouput(result)
{
    console.log("I am in output function");
    console.log("Multiplication of the provided inputs are: " + result);
}

function display(result, callback)
{
    console.log("I am in display function");
    console.log("Multiplication of the provided inputs are: " + result);
    callback(result);
}

function CallBackFunction(result) {            
    console.log("I am inside callback function");             
} 

multiply(5, 6, ouput); // output is passed as callback

// display and CallBackFunction are passed as callbacks
multiply(7, 6, display, CallBackFunction); // display is passed as callback