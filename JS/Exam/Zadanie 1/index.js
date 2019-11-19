function getRandom(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

function mixArray(orginArray) {
    let mixedArray = [];
    while (orginArray.length > 0) {
        mixedArray.push(orginArray.splice(getRandom(orginArray.length), 1)[0]);
    }
    return mixedArray;
}

function sum(indexes, arrayOfBalls) {
    return indexes.reduce((p, c) => p + arrayOfBalls[c], 0);
}

function findIndex(indexes, arrayOfBalls) {
    let length = indexes.length;

    switch (true) {
        case (length === 1):
            return indexes[0];
        case (length === 2):
            return arrayOfBalls[indexes[0]] > arrayOfBalls[indexes[1]] ? indexes[0] : indexes[1];
        case (length % 2 === 0): // even
            let halfIndexes = indexes.splice(0, length / 2);

            if (sum(halfIndexes, arrayOfBalls) > sum(indexes, arrayOfBalls)) {
                return findIndex(halfIndexes, arrayOfBalls);
            } else {
                return findIndex(indexes, arrayOfBalls);
            }
        case (length % 2 != 0): // odd
            let firstHalfIndexes = indexes.splice(0, (length - 1) / 2),
                secondHalfIndexes = indexes.splice(0, (indexes.length - 1)),
                firstSum = sum(firstHalfIndexes, arrayOfBalls),
                secondSum = sum(secondHalfIndexes, arrayOfBalls);

            if (firstSum === secondSum) {
                return indexes[0];
            } else if (firstSum > secondSum) {
                return findIndex(firstHalfIndexes, arrayOfBalls);
            } else {
                return findIndex(secondHalfIndexes, arrayOfBalls);
            }
    }

}

function getIndexOf2(arrayOfBalls) {
    let indexes = [];

    indexes = arrayOfBalls.map((v, i) => i);
    indexes = mixArray(indexes);
    return findIndex(indexes, arrayOfBalls);
}

for (let i = 0; i < 200; i++) {
    let randArray = Array(getRandom(60, 8)).fill(1);

    randArray = mixArray(randArray);
    randArray[getRandom(randArray.length)] = 2;
    
    let index = getIndexOf2(randArray),
        errorMessage = randArray[index] === 2 ? "" : "ERROR";

    console.log(`${i+1}.${errorMessage} "` + randArray[index] + `" => ${index} [` + randArray + "]("+randArray.length+")");
    if(!!errorMessage) break;
}