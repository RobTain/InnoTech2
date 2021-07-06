let valueArray = 0;

function zeigeDaten(daten, parameter) {

    if (parameter != "all") {
        // Überschrift setzen
        d3.select("#headerColumn").text(parameter);
    }

    // JSON komplett reinladen 
    const myJSON = JSON.stringify(daten.werte, null, "");

    // erstes JSON selektieren
	// parameter auswerten

    var firstEntry = daten[valueArray];

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
        colour.style.backgroundColor = "#d24525";
    } else if (colourOrange == "true") {
        colour.style.backgroundColor = "Yellow";
    } else if (colourGreen == "true") {
        colour.style.backgroundColor = "#217446";
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
        document.getElementById("picture").src="pictures/Hochregallager.png";
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
        document.getElementById("picture").src="pictures/Brennofen.png";
        break;

        case "Sortierstrecke":
        d3.select("#value1").text(values[14]);
        d3.select("#value2").text(values[25]);
        d3.select("#value3").text(values[16]);
        d3.select("#value4").text(values[17]);
        d3.select("#value5").text(values[18]);
        d3.select("#value6").text(values[39]);
        document.getElementById("picture").src="pictures/Sortierstrecke.png";
        break;


        case "Sauggreifer":
        d3.select("#value1").text(values[27]);
        d3.select("#value2").text(values[28]);
        d3.select("#value3").text(values[29]);
        d3.select("#value4").text(values[2]);
        d3.select("#value5").text(values[3]);
        d3.select("#value6").text(values[4]);
        document.getElementById("picture").src="pictures/Sauggreifer.png";
        break;

        case"all":
        d3.select("#inputHochregal1").text(values[21]);
        d3.select("#inputHochregal2").text(values[22]);
        d3.select("#inputHochregal3").text(values[23]);
        d3.select("#inputHochregal4").text(values[24]);
        d3.select("#inputHochregal5").text(values[25]);
        d3.select("#inputHochregal6").text(values[26]);
        d3.select("#inputHochregal7").text(values[32]);
        d3.select("#inputHochregal8").text(values[0].replace("{",""));
        d3.select("#inputHochregal9").text(values[1]);
        document.getElementById("pictureHochregal").src="pictures/Hochregallager.png";

        d3.select("#inputBrennofen1").text(values[5]);
        d3.select("#inputBrennofen2").text(values[6]);
        d3.select("#inputBrennofen3").text(values[7]);
        d3.select("#inputBrennofen4").text(values[8]);
        d3.select("#inputBrennofen5").text(values[9]);
        d3.select("#inputBrennofen6").text(values[10]);
        d3.select("#inputBrennofen7").text(values[11]);
        d3.select("#inputBrennofen8").text(values[12]);
        d3.select("#inputBrennofen9").text(values[13]);
        d3.select("#inputBrennofen10").text(values[14]);
        d3.select("#inputBrennofen11").text(values[30]);
        d3.select("#inputBrennofen12").text(values[31]);
        d3.select("#inputBrennofen13").text(values[32]);
        d3.select("#inputBrennofen14").text(values[33]);
        d3.select("#inputBrennofen15").text(values[34]);
        d3.select("#inputBrennofen16").text(values[35]);
        d3.select("#inputBrennofen17").text(values[37]);
        d3.select("#inputBrennofen18").text(values[38]);
        document.getElementById("pictureBrennofen").src="pictures/Brennofen.png";

        d3.select("#inputSauggreifer1").text(values[14]);
        d3.select("#inputSauggreifer2").text(values[25]);
        d3.select("#inputSauggreifer3").text(values[16]);
        d3.select("#inputSauggreifer4").text(values[17]);
        d3.select("#inputSauggreifer5").text(values[18]);
        d3.select("#inputSauggreifer6").text(values[39]);
        document.getElementById("pictureSauggreifer").src="pictures/Sauggreifer.png";

        d3.select("#inputSortier1").text(values[27]);
        d3.select("#inputSortier2").text(values[28]);
        d3.select("#inputSortier3").text(values[29]);
        d3.select("#inputSortier4").text(values[2]);
        d3.select("#inputSortier5").text(values[3]);
        d3.select("#inputSortier6").text(values[4]);
        document.getElementById("pictureSortier").src="pictures/Sortierstrecke.png";
    }
}

function empfangeDaten(datenEmpfangen,error) {
    // Parameter auslesen und mitschicken


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    let errorValue = -1;
    if (queryString.match("errorValue=")) {
         errorValue = urlParams.get('errorValue').replace("&errorValue=", "");
    }

    let parameter = urlParams.get('parameter').replace("?parameter=", "");

    if(errorValue == 1) {
        valueArray = 66;
    } else if (errorValue == 2) {
        valueArray = 236;
    } else if (errorValue == 0) {
        valueArray = 40;
    }

    if (error) {
        console.log(error);
    } else {
        zeigeDaten(datenEmpfangen, parameter);
    }
}

function aktualisiere() {

    // fix open file with http parameter 
	const queryString = window.location.search;
    if (queryString == "") {
        var url = window.location.href;    
        url += '?parameter=all'
        window.location.href = url;
    }

    
    /*
     Leider muss ich an dieser Stelle erwähnen, dass mein Informatik Partner zwar namentlich an
     diesem Projekt beteiligt war, jedoch zu keiner Zeit praktisch. Ich liebe Gruppenarbeiten.
     Mal schauen, ob er diesen Kommentar findet, wenn ja, würde er ihn wahrscheinlich löschen, aber
     da zwei Wochen vor der Abgabe noch nichts brauchbares commited wurde, bezweifle ich das stark.
    */

    //d3.json nutzen, um Link aufzurufen und das Ergebnis an die empfangeDaten- Methode zu übergeben.
    d3.json("http://it2wi1.if-lab.de/rest/ft_ablauf").then(function (data, error) {
        empfangeDaten(data, error)
    });
}