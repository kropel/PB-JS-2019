function uniq(someArray){
    let uniqArray = [];
    someArray.forEach(element => {
        if(uniqArray.indexOf(element) < 0){
            uniqArray.push(element);
        }
    });
    return uniqArray;
}
function diff(arrayX, arrayY){
    let difference = [];
    arrayX.forEach(element => {
        if(arrayY.indexOf(element) < 0){
            difference.push(element);
        }
    });
    arrayY.forEach(element => {
        if(arrayX.indexOf(element) < 0){
            difference.push(element);
        }
    });
    return difference;
}

module.exports = {
    uniq,
    diff,
};