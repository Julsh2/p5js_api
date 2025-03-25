
var spaceData;


function setup() {
    createCanvas(400, 400)
    background(0);

    loadJSON("http://api.open-notify.org/astros.json", gotData, 'jsonp')
}

function gotData(data) {
    spaceData = data;
 }

 function draw () {
    fill(255, 255, 255)
    rect(40, 40, 40, 40)

    randomSeed(3); // Ensures consistent random values

    if (spaceData) {
        for (var i = 0; i < spaceData.number; i++)
        ellipse(random(width), random(height), 10, 10)
    }

 }