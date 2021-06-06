
function zeigeDaten(daten, parameter) {

    let heading = d3.select("#headerColumn").text(parameter);

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

    console.log(parameter);

    switch(parameter) {
        case "Hochregallager":


        /*
        "Referenztaster horizontal":" true",
        "Lichtschranke innen":" true",
        "Lichtschranke aussen":" true",
        "Referenztaster vertikal":" true",
        "Referenztaster Ausleger vorne":" false",
        "Referenztaster Ausleger hinten":" true",
        "B-Motor Foerderband vorwaerts":" false",
        "B-Motor Foerderband rueckwaerts":" false", // Gegenteil
        "H-horizontal":"0",
        "V-vertikal":"0",
        // Motor Ausleger vorwärts fehlt

        console.log(values[21]);
        console.log(values[22]);
        console.log(values[23]);
        console.log(values[24]);
        console.log(values[25]);
        console.log(values[26]);
        console.log(values[32]);
        console.log(values[0]);
        console.log(values[1]);

        value last = 43
        */
        output = values[21] + "," + values[22] + "," + values[23] + "," + values[24] 
        + "," + values[25] + "," + values[26] + "," + values[32] + "," + values[0].replace("{","")
        + "," + values[1];



        break;
        case "Brennofen":

                /*
        "B-Referenzschalter Drehkranz (Pos. Sauger)":" false",
        "B-Referenzschalter Drehkranz (Pos. Foerderband)":" false",
        "B-Lichtschranke Ende Foerderband":" true",
        "B-Referenzschalter Drehkranz (Pos. Saege)":" false",
        "B-Referenzschalter Sauger (Pos. Drehkranz)":" true",
        "B-Referenzschalter Ofenschieber Innen":" false",
        "B-Referenzschalter Ofenschieber Aussen":" true",
        "B-Referenzschalter Sauger (Pos. Brennofen)":" false",
        "B-Lichtschranke Brennofen":" true",
        "B-Motor Drehkranz im Uhrzeigersinn":" false",
        "B-Motor Drehkranz gegen Uhrzeigersinn":" false",
        "B-Motor Foerderband vorwaerts":" false",
        "B-Motor Saege":" false",
        "B-Motor Ofenschieber Einfahren":" false",
        "B-Motor Ofenschieber Ausfahren":" false",
        "B-Motor Sauger zum Ofen":" false",
        "B-Motor Sauger zum Drehkranz":" false",
        "B-Leuchte Ofen":" false",

        console.log(values[5]);
        console.log(values[6]);
        console.log(values[7]);
        console.log(values[8]);
        console.log(values[9]);
        console.log(values[10]);
        console.log(values[11]);
        console.log(values[12]);
        console.log(values[13]);
        console.log(values[14]);
        console.log(values[30]);
        console.log(values[31]);
        console.log(values[32]);
        console.log(values[33]);
        console.log(values[34]);
        console.log(values[35]);
        console.log(values[37]);
        console.log(values[38]);

        */

        output = values[5] + "," + values[6] + "," + values[7] + "," + values[8] 
        + "," + values[9] + "," + values[10] + "," + values[11] + "," + values[12]
        + "," + values[13] + "," + values[14] + "," + values[30] + "," + values[31]
        + "," + values[32] + "," + values[33] + "," + values[34] + "," + values[35]
        + "," + values[37] + "," + values[38];


        break;
        case "Sortierstrecke":

        /*
        "S-Lichtschranke Eingang":" true",
        "S-Lichtschranke nach Farbsensor":" true",
        // Farbsensor missing
        "S-Lichtschranke weiss":" true",
        "S-Lichtschranke rot":" true",
        "S-Lichtschranke blau":" true",
        "S-Motor Foerderband":" false",
        
        console.log(values[14]);
        console.log(values[25]);
        console.log(values[16]);
        console.log(values[17]);
        console.log(values[18]);
        console.log(values[39]);
        */
        output = values[14] + "," + values[25] + "," + values[16] + "," + values[17] 
        + "," + values[18] + "," + values[39];

        break;
        case "Sauggreifer":

                /*
        "V-Referenzschalter vertikal":" true",
        "V-Referenzschalter horizontal":" true",
        "V-Referenzschalter drehen":" true",
        "V-vertikal":"0",
        "V-drehen":"0",
        "V-horizontal":"0",

        console.log(values[27]);
        console.log(values[28]);
        console.log(values[29]);
        console.log(values[2]);
        console.log(values[3]);
        console.log(values[4]);
        */

        output = values[27] + "," + values[28] + "," + values[29] + "," + values[2] 
        + "," + values[3] + "," + values[4];

        break;
    }

    // JSON ausgeben
    let t = d3.select("#values").text(output);

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
