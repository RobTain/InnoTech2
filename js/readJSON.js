
function zeigeDaten(daten, parameter) {

    // Überschrift setzen
    d3.select("#headerColumn").text(parameter);

    // JSON komplett reinladen 
    const myJSON = JSON.stringify(daten.werte, null, "");

    // erstes JSON selektieren
    var firstEntry = daten[0];

    // als JSON nochmal reinladen
    const json = JSON.stringify(JSON.stringify(firstEntry.werte, null, ""));

    // JSON auf die spezifischen Values verkleinern
    const test = JSON.parse(json);
    const values = test.split(',');

    let output;

    // Ampelfarbe parsen
    let colourRed = values[40].split(":");
    colourRed = colourRed[1].replace("\"", "").split(" ")[1].replace("\"", "");
    let colourOrange = values[41].split(":");
    colourOrange = colourOrange[1].replace("\"", "").split(" ")[1].replace("\"", "");
    let colourGreen = values[42].split(":");
    colourGreen = colourGreen[1].replace("\"", "").split(" ")[1].replace("\"", "");
    let colourWhite = values[43].split(":");
    colourWhite = colourWhite[1].replace("\"", "").split(" ")[1].replace("\"", "").replace("}","");
    


    // Setzen der Farbe
    let colour = document.querySelector("#trafficLight");
    if (colourRed == "true") {
        colour.style.backgroundColor = "Red";
    } else if (colourOrange == "true") {
        colour.style.backgroundColor = "Yellow";
    } else if (colourGreen == "true") {
        colour.style.backgroundColor = "Green";
    } else {
        colour.style.backgroundColor = "White";
    }

   

    switch(parameter) {
        case "Hochregallager":

        d3.select("#value1").text(values[21]);
        d3.select("#value2").text(values[22]);
        d3.select("#value3").text(values[23]);
        d3.select("#value4").text(values[24]);
        d3.select("#value5").text(values[25]);
        d3.select("#value6").text(values[26]);
        d3.select("#value7").text(values[32]);
        d3.select("#value8").text(values[0].replace("{",""));
        d3.select("#value9").text(values[1]);

        break;
        case "Brennofen":

        d3.select("#value1").text(values[5]);
        d3.select("#value2").text(values[6]);
        d3.select("#value3").text(values[7]);
        d3.select("#value4").text(values[8]);
        d3.select("#value5").text(values[9]);
        d3.select("#value6").text(values[10]);
        d3.select("#value7").text(values[11]);
        d3.select("#value8").text(values[12]);
        d3.select("#value9").text(values[13]);
        d3.select("#value10").text(values[14]);
        d3.select("#value11").text(values[30]);
        d3.select("#value12").text(values[31]);
        d3.select("#value13").text(values[32]);
        d3.select("#value14").text(values[33]);
        d3.select("#value15").text(values[34]);
        d3.select("#value16").text(values[35]);
        d3.select("#value17").text(values[37]);
        d3.select("#value18").text(values[38]);


        break;
        case "Sortierstrecke":

        d3.select("#value1").text(values[14]);
        d3.select("#value2").text(values[25]);
        d3.select("#value3").text(values[16]);
        d3.select("#value4").text(values[17]);
        d3.select("#value5").text(values[18]);
        d3.select("#value6").text(values[39]);

        break;
        case "Sauggreifer":

        d3.select("#value1").text(values[27]);
        d3.select("#value2").text(values[28]);
        d3.select("#value3").text(values[29]);
        d3.select("#value4").text(values[2]);
        d3.select("#value5").text(values[3]);
        d3.select("#value6").text(values[4]);

        break;
    }
}

function empfangeDaten(datenEmpfangen,error) {
    // Parameter auslesen und mitschicken


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let parameter = urlParams.get('parameter').replace("?parameter=", "");
    if (error) {
        console.log(error);
    } else {
        zeigeDaten(datenEmpfangen, parameter);
    }
}

function aktualisiere() {
    //d3.json nutzen, um Link aufzurufen und das Ergebnis an die empfangeDaten- Methode zu übergeben.
    d3.json("http://it2wi1.if-lab.de/rest/ft_ablauf").then(function (data, error) {
        empfangeDaten(data, error)
    });
}
