// https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
module.exports.sum = (x, y) => {
    return x + y;
};

// https://www.geeksforgeeks.org/subtract-two-numbers-without-using-arithmetic-operators/
module.exports.minus = (x, y) => {
    while (y !== 0) {
        let borrow = ~x & y;
        x = x ^ y;
        y = borrow << 1;
    }
    return x;
};
