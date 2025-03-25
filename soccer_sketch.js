
//https://github.com/dariusk/corpora/tree/master/data

var data;

function gotData(data) {
    console.log(data)
 }

function setup() {
    noCanvas() ;
    //createCanvas(400, 400);
    //background(220);
    loadJSON("soccer.json", gotData)

    var soccer = data.teams;

    for (var i = 0; i < soccer.length; i++) {
        createElement('h1', soccer[i].name) //puxei o name. soccer é teams, como inicial. 
        var members = soccer[i].members; // falei que o dado dentro da linha de soccer pra ser acessado como member
    for (var j = 0; j < members.length; j++) {
        createDiv(members[j]) // acessei os members dentro de teams. 
     }
    }
}

