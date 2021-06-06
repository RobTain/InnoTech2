
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


    let value = 0;
    switch(parameter) {
        case "Hochregallager":
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

         console.log(values[0].replace("{", "").replace("}", ""));
        break;
        case "Brennofen":
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

        break;
        case "Sortierstrecke":

        "S-Lichtschranke Eingang":" true",
        "S-Lichtschranke nach Farbsensor":" true",
        // Farbsensor missing
        "S-Lichtschranke weiss":" true",
        "S-Lichtschranke rot":" true",
        "S-Lichtschranke blau":" true",
        "S-Motor Foerderband":" false",
        break;
        case "Sauggreifer":

        "V-Referenzschalter vertikal":" true",
        "V-Referenzschalter horizontal":" true",
        "V-Referenzschalter drehen":" true",
        "V-vertikal":"0",
        "V-drehen":"0",
        "V-horizontal":"0",
        break;
        default:
        value = 0;
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
