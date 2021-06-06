
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


        value last = 43
        */

        console.log(values[21]);
        console.log(values[22]);
        console.log(values[23]);
        console.log(values[24]);
        console.log(values[25]);
        console.log(values[26]);
        console.log(values[32]);
        console.log(values[0]);
        console.log(values[1]);


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
        */

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
        */
        console.log(values[14]);
        console.log(values[25]);
        console.log(values[16]);
        console.log(values[17]);
        console.log(values[18]);
        console.log(values[39]);

        break;
        case "Sauggreifer":

                /*
        "V-Referenzschalter vertikal":" true",
        "V-Referenzschalter horizontal":" true",
        "V-Referenzschalter drehen":" true",
        "V-vertikal":"0",
        "V-drehen":"0",
        "V-horizontal":"0",
        */

        console.log(values[27]);
        console.log(values[28]);
        console.log(values[29]);
        console.log(values[2]);
        console.log(values[3]);
        console.log(values[4]);

        break;
    }

    


    // JSON ausgeben
    let t = d3.select("#values").text(json);

    

	
/*
    //Rückgabe der d3.selectAll - Methode in variable p speichern.(Alle Kindelemente von content, die p- Elemente sind.) Am Anfang gibt es noch keine.
    let p = d3.select("#demo").selectAll("p").data(daten);

    //.enter().append(): Daten hinzufuegen falls es mehr Daten als Elemente im HTML gibt.
    //geschieht hier für jede Zeile von daten.
    p.enter().append("p")
        .text(function (daten) {
            // JSON als Variable speichern
            const myJSON = JSON.stringify(daten.werte, null, 10);
//            var res = myJSON.split(",");
//            console.log(res[0]);
    
            return daten;
        });

    //.exit().remove(): Daten löschen, falls es mehr Elemente im HTML als Daten gibt.
    p.exit().remove();

*/
/*
    // Version 2, set single JSON rein 
    const myJSON = JSON.stringify(daten.werte, null, "");
    var firstEntry = daten[0];

    const json = JSON.stringify(JSON.stringify(firstEntry.werte, null, ""));
    let t = d3.select("#singleJSON").text(json);
    */


}

function empfangeDaten(datenEmpfangen,error) {
    // Parameter auslesen und mitschicken
    let parameter = "Hochregallager";
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
