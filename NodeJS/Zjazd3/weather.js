const request = require('request');
const argv = require('yargs').argv;

let {city} = argv,
    kelwin = 273.15;

city = !!city ? city : "Bia%C5%82ystok";

let path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0ed761300a2725ca778c07831ae64d6e`;

request(path, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(`body:\n temperatura w ${city} wynosi ` + (getTemp(JSON.parse(body), response.statusCode))+ " \u2103"); // Print the HTML for the Google homepage.
});

function getTemp(obj, status){
    if(!status == '200'){
        return 'błąd';
    }else {
    let {main} = obj,
        {temp} = main;
    return (temp - kelwin).toFixed(1);
    }
}