//  This is to show a basic JS file without using Modules   

const rect = {    // create an object rect, give it 2 methods perimeter and area 
    perimeter: (x, y) => 2 * (x + y),  // takes 2 values, x and y 
    area: (x, y) => x * y          // return product of those values
};

function solveRect(l, w) {    // define a function to use the rect object, pass in 2 values l and w
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);  // log values of l and w to console using backticks for template literals (not quote marks)
    //then check for error values 
    if (l <= 0 || w <= 0) {  // if either are true, log and error message (below)
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);  // log error msg + received values 
    } else {    // add an else block 
        console.log(`Area of rectangle: ${rect.area(l, w)}`);   // console log area of rect, pass in l and w arguments
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);  // console log perimeter of rect, passing in l and w arguments
    }
}

//  call this function to test it, we'll test 4 times 
solveRect(2, 4);    // these are valid arguments; should return no error
solveRect(3, 5);    // these are valid arguments; should return no error
solveRect(0, 5);    // these are INvalid arguments; should return error
solveRect(5, -3);   // these are INvalid arguments; should return error