
var weather;


function setup() {
    createCanvas(400, 400)
    background(0);

    loadJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=ec56eced1bd6354b833ca2af443d7269", gotData, 'jsonp')
}

function gotData(data) {
    weather = data.wind;
    console.log(data)
 }

 function draw () {
    fill(255, 255, 255)
    rect(40, 40, 40, 40)

    randomSeed(3); // Ensures consistent random values

    if (gotData) {
        for (var i = 0; i < weather.deg; i++)
        ellipse(random(width), random(height), 10, 10)
    }

 }