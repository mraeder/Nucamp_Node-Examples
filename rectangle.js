module.exports = (x, y, callback) => {  // exports keyword (can be written as module.exports or just as exports)
    if (x <= 0 || y <= 0) {
            callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};