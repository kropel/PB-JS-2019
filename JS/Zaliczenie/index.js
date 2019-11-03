let balls = Array(getRandomNumber(200, 8)).fill(1),
    indexesBalls = balls.map((v, i) => i),
    numberOFIteration = 0;

balls[getRandomNumber(balls.length)] = 2;

indexesBalls = getRandomArray(indexesBalls);

function getRandomArray(orginalArray) {
    let tempArray = [...orginalArray],
        randomArray = [];
    while (tempArray.length > 0) {
        randomArray.push(tempArray.splice(getRandomNumber(tempArray.length), 1)[0]);
    }
    return randomArray;
}

function getRandomNumber(max, min = 0) {
    return Math.floor(Math.random() * max + min);
}

function sum(indexes) {
    return indexes.reduce((previous, current) => previous + balls[current], 0);
}

function findDifferendPartArray(tempArray, breakPoint) {
    let indexX = tempArray.splice(0, breakPoint),
        indexY = tempArray.splice(0, breakPoint),
        sumX = sum(indexX),
        sumY = sum(indexY);

    if (sumX === sumY) {
        if (tempArray.length === 1) {
            return tempArray[0];
        } else {
            return getBall(tempArray);
        }
    } else if (sumX - sumY > 0) {
        return getBall(indexX);
    } else {
        return getBall(indexY);
    }
}

function getBall(indexes) { // 'indexes' is an array of indexes balls array
    let length = indexes.length,
        breakPoint = 0;

    numberOFIteration++;
    console.log('Iteration: ' + numberOFIteration + ` whit array(${length}): ` + indexes + "\n");

    switch(true){
    case (length === 1):
        return indexes[0];

    case (length === 2):
        return (balls[indexes[0]] > balls[indexes[1]] ? indexes[0] : indexes[1]);

    case (length === 3):
        if (balls[indexes[0]] - balls[indexes[1]] === 0) { // if balls on indexes 0 and 1 are equal return index of third ball
            return indexes[2];
        } else {                                        // if balls on indexes 0 and 1 are NOT equal call getBall function without last index
            indexes.pop();
            return getBall(indexes);
        }

    case (length === 4):
        indexX = indexes.splice(0, 2);
        if (sum(indexX) > sum(indexes)) {
            return getBall(indexX);
        } else {
            return getBall(indexes);
        }
        
    case (length === 5):
        breakPoint = 2;
        return findDifferendPartArray(indexes, breakPoint);

    case (length % 2 === 0):           // even
        breakPoint = (length - 2) / 2;  // break point array 'indexes' without last two elements 
        return findDifferendPartArray(indexes, breakPoint);
        
    case (length % 2 != 0):             // odd 
        breakPoint = (length - 3) / 2;  // break point array 'indexes' without last tree elements 
        return findDifferendPartArray(indexes, breakPoint);
    }//switch


    // if (length === 1) {
    //     return indexes[0];
    // }else if (length === 2) {
    //     return (balls[indexes[0]] > balls[indexes[1]] ? indexes[0] : indexes[1]);
    // }else if (length === 3) {
    //     if (balls[indexes[0]] - balls[indexes[1]] === 0) { // if balls on indexes 0 and 1 are equal return index of third ball
    //         return indexes[2];
    //     } else {                                        // if balls on indexes 0 and 1 are NOT equal call getBall function without last index
    //         indexes.pop();
    //         return getBall(indexes);
    //     }
    // }else if (length === 4) {
    //     indexX = indexes.splice(0, 2);
    //     if (sum(indexX) > sum(indexes)) {
    //         return getBall(indexX);
    //     } else {
    //         return getBall(indexes);
    //     }
    // }else if (length === 5) {
    //     breakPoint = 2;
    //     return findDifferendPartArray(indexes, breakPoint);
    // }else if (length % 2 === 0) {           // even
    //     breakPoint = (length - 2) / 2;  // break point array 'indexes' without last two elements 
    //     return findDifferendPartArray(indexes, breakPoint);
    // }else if (length % 2 != 0) {             // odd 
    //     breakPoint = (length - 3) / 2;  // break point array 'indexes' without last tree elements 
    //     return findDifferendPartArray(indexes, breakPoint);
    // }
}


let indexOfBall = getBall(indexesBalls);
console.log('Index of ball with "' + balls[indexOfBall] + '" => ' + indexOfBall + ' at array: ' + balls);
console.log('Number of calls getBall() function: ' + numberOFIteration);
