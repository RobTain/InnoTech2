
function zeigeDaten(daten) {

    //Rückgabe der d3.selectAll - Methode in variable p speichern.(Alle Kindelemente von content, die p- Elemente sind.) Am Anfang gibt es noch keine.
    let p = d3.select("#content").selectAll("p").data(daten);

    //.enter().append(): Daten hinzufuegen falls es mehr Daten als Elemente im HTML gibt.
    //geschieht hier für jede Zeile von daten.
    p.enter().append("p")
        .text(function (daten) {
            return "Uhrzeit: " + daten.datum + " Wert:" + JSON.stringify(daten.werte, null, 2);
        });
    //.exit().remove(): Daten löschen, falls es mehr Elemente im HTML als Daten gibt.
    p.exit().remove();
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
