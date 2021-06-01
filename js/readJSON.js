
function zeigeDaten(daten) {

	
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

    // Version 2, set single JSON rein 
    const myJSON = JSON.stringify(daten.werte, null, "");
    var firstEntry = daten[0];

    const json = JSON.stringify(JSON.stringify(firstEntry.werte, null, ""));
    let t = d3.select("#singleJSON").text(json);

}

function empfangeDaten(datenEmpfangen,error) {
    if (error) {
        console.log(error);
    } else {
        zeigeDaten(datenEmpfangen);
    }
}

function aktualisiere() {
    //d3.json nutzen, um Link aufzurufen und das Ergebnis an die empfangeDaten- Methode zu übergeben.
    d3.json("http://it2wi1.if-lab.de/rest/ft_ablauf").then(function (data, error) {
        empfangeDaten(data, error)
    });
}
