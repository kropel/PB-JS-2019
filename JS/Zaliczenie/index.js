function getRandomNumber(max, min = 0){
    return Math.floor(Math.random()*max + min);
}
let tab = Array(getRandomNumber(12,8)).fill(1);
    tab[getRandomNumber(tab.length)]= 2;
    console.table(tab);
    if (tab.length % 2 === 0){      //nieparzysta liczba elementow
        while()
    } else {                        //parzysta liczba elementow

    }
