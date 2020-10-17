module.exports = (x, y, callback) => {  // assign a function that takes 3 params. callback will be passed in when function is called elsewhere
    if (x <= 0 || y <= 0) {     // check if arguments are invalid; values need to be positive numbers
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));  // this is node error callback pattern, expecting error object as its first argument (this is conventional)
    } else {                    // handles cases where numbers passed in are valid/positive numbers 
        setTimeout(() =>        // cause a slight deloy
            callback(null, {    // first argument of callback function, pass in null 
                perimeter: () => 2 * (x + y),  // second argument as object with two methods; perimeter and area, comma between the two methods 
                area: () => x * y               // we can access x and y even with empty parentheses due to closures 
            }),
            2000                // passing in second argument for how many milliseconds to wait  
        );
    }
};
// Summary: changed export to return this entire function for this module, instead of two separate methods, so we needed to use 
// module.exports, not the shorthand. For that function we're returning in this module, 3 params; x, y, and callback. Check if 
// there's an error, if so, execute callback function and give it error object as its first argument. If no error, simulate 
// delay, then call that same callback function but with null for first argument instead of error argument. For second callback argument
// give it object with 2 methods that can be used to compute perimeter and area of rectangle 