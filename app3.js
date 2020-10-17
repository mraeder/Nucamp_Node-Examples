const rect = require('./rectangle2');

function solveRect(l, w) {   
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {  // Rect refers to the function we're pulling in from rectangle3.js. It expects 3 arguments, l, w, and callback. Define callback function right here as (error, callback)
        if (err) {  // inside callback function defn, checking if there's an error. If so...
            console.log('ERROR:', err.message);  // ...console log error msg like this
        } else {   // if no error, then called as null. console log of area and perim, but name of that object is now 
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);  // rectangle as we defined it in param list
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);  // using empty parameter lists 
        }
    });
    console.log('This statement is logged after the call to rect()');  // code will call function in rectangle module, if 
                                                                       //  zero or less, will run an error message right away. If valid, module will run callback after 2 seconds. Timer phase, then callback which will solve for/console log area and perim
}

//  call this function to test it, we'll test 4 times 
solveRect(2, 4);    // these are valid arguments; should return no error
solveRect(3, 5);    // these are valid arguments; should return no error
solveRect(0, 5);    // these are INvalid arguments; should return error
solveRect(5, -3);   // these are INvalid arguments; should return error

// because of closures, callbacks still had access to l and w values that were passed into rect function, so still able to run calculations
// with Node support, asynchronous functions can take their own time to finish and return their results while main computation can proceed forward
// Once that's finished, return to main computation thread with callbacks 