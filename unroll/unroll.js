
// This function takes a square array and returns a 1D array of the elements in the array in a spiral pattern, clockwise from the top left corner.
function unroll(squareArray, arr=[]) {
    for (let i=0;i<squareArray.length;i++) {
        arr.push(squareArray[0][i])
    }
    squareArray.shift();
    for (let j=0;j<squareArray.length;j++) {
        arr.push(squareArray[j][squareArray.length])
        squareArray[j].pop()
    }

    for (let k=squareArray.length-1;k>=0;k--) {
        arr.push(squareArray[squareArray.length-1][k])
    }
    squareArray.pop();

    for (let l=squareArray.length-1;l>=0;l--) {
        arr.push(squareArray[l][0])
        squareArray[l].shift()
    }

    if (squareArray.length>0) {
        return unroll(squareArray,arr)
    }
    return arr
}

module.exports = unroll;