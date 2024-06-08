function distinctArray(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        if (!newArr.includes(input[i])) {
            newArr.push(input[i]);
        }
    }

    console.log(newArr.join(` `));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);