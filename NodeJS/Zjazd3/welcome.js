console.log('start');
const os = require('os');
const fs = require('fs');

const userName = os.userInfo().username;
let i=0,
    path= "greathing.txt";

function showUser(n){
    i++;
    let welcome = n+". "+ userName+ " "+i;
    console.log(welcome);
    fs.appendFile(path, welcome + "\n", (err) => showMessage({err, welcome, path}));
}
function showMessage(msObj){
    let {err, welcome, path} = msObj;
    if(err){
        console.log(err.toString());
    }else {
    console.log('Została zapisana informacja: "'+welcome+'" w pliku "'+path+'"');
    }
}

setTimeout(() => showUser(1),10000);
setTimeout(() => showUser(2),3000);
setTimeout(() => showUser(3),5000);
setTimeout(() => showUser(4),13000);

console.log('end');