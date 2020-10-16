exports.perimeter = (x, y) => 2 * (x + y); // exports keyword (can be written as module.exports or just as exports)
exports.area = (x, y) => x * y;  // return product of x and y 

// this file is a module with 2 exports. How we can use exports / module.exports to make JS file into 
// Node module, then use that module in another JS file by importing from it with require function 
// module.exports, exports, and require are all part of Node, not vanilla JS 
