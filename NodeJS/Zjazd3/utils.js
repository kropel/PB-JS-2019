let uniq = function(tab){
    let newTab = [];
    tab.forEach(element => {
       if(newTab.indexOf(element)<0){
           newTab.push(element)
       } 
    });
    return newTab;
};

let diff = function(tab1, tab2){
    let diffTab= [];
    tab1.forEach(element => {
        if(tab2.indexOf(element)<0){
            diffTab.push(element);
        }
    });
    return diffTab;
}

module.exports = {
    uniq: uniq,
    diff: diff,
};