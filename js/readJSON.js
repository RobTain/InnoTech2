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
        document.getElementById("picture").src="pictures/Hochregallager.png";
        d3.select("#value1").text(values[21].split(":")[0].replaceAll("\"", ""));
        if (values[21].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value1").style.backgroundColor = "#d24525"
        }
        d3.select("#value2").text(values[22].split(":")[0].replaceAll("\"", ""));
        if (values[22].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value2").style.backgroundColor = "#d24525"
        }
        d3.select("#value3").text(values[23].split(":")[0].replaceAll("\"", ""));
        if (values[22].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value3").style.backgroundColor = "#d24525"
        }
        d3.select("#value4").text(values[24].split(":")[0].replaceAll("\"", ""));
        if (values[24].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value4").style.backgroundColor = "#d24525"
        }
        d3.select("#value5").text(values[25].split(":")[0].replaceAll("\"", ""));
        if (values[25].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value5").style.backgroundColor = "#d24525"
        }
        d3.select("#value6").text(values[26].split(":")[0].replaceAll("\"", ""));
        if (values[26].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value6").style.backgroundColor = "#d24525"
        }

        d3.select("#value7").text(values[32].split(":")[0].replaceAll("\"", ""));
        if (values[32].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value7").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value7").style.backgroundColor = "#d24525"
        }

        d3.select("#value8").text(values[0].replace("{","").replace(":",": ").replaceAll("\"", ""));
        document.querySelector("#value8").style.backgroundColor = "#717e87"
        d3.select("#value9").text(values[1].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#value9").style.backgroundColor = "#717e87"
        break;

        case "Brennofen":
        document.getElementById("picture").src="pictures/Brennofen.png";
        d3.select("#value1").text(values[5].split(":")[0].replaceAll("\"", ""));
        if (values[5].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value1").style.backgroundColor = "#d24525"
        }
        d3.select("#value2").text(values[6].split(":")[0].replaceAll("\"", ""));
        if (values[6].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value2").style.backgroundColor = "#d24525"
        }
        d3.select("#value3").text(values[7].split(":")[0].replaceAll("\"", ""));
        if (values[7].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value3").style.backgroundColor = "#d24525"
        }
        d3.select("#value4").text(values[8].split(":")[0].replaceAll("\"", ""));
        if (values[8].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value4").style.backgroundColor = "#d24525"
        }
        d3.select("#value5").text(values[9].split(":")[0].replaceAll("\"", ""));
        if (values[9].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value5").style.backgroundColor = "#d24525"
        }
        d3.select("#value6").text(values[10].split(":")[0].replaceAll("\"", ""));
        if (values[10].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value6").style.backgroundColor = "#d24525"
        }
        d3.select("#value7").text(values[11].split(":")[0].replaceAll("\"", ""));
        if (values[11].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value7").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value7").style.backgroundColor = "#d24525"
        }
        d3.select("#value8").text(values[12].split(":")[0].replaceAll("\"", ""));
        if (values[12].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value8").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value8").style.backgroundColor = "#d24525"
        }
        d3.select("#value9").text(values[13].split(":")[0].replaceAll("\"", ""));
        if (values[13].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value9").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value9").style.backgroundColor = "#d24525"
        }
        d3.select("#value10").text(values[14].split(":")[0].replaceAll("\"", ""));
        if (values[14].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value10").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value10").style.backgroundColor = "#d24525"
        }
        d3.select("#value11").text(values[30].split(":")[0].replaceAll("\"", ""));
        if (values[30].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value11").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value11").style.backgroundColor = "#d24525"
        }
        d3.select("#value12").text(values[31].split(":")[0].replaceAll("\"", ""));
        if (values[31].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value12").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value12").style.backgroundColor = "#d24525"
        }
        d3.select("#value13").text(values[32].split(":")[0].replaceAll("\"", ""));
        if (values[32].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value13").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value13").style.backgroundColor = "#d24525"
        }
        d3.select("#value14").text(values[33].split(":")[0].replaceAll("\"", ""));
        if (values[33].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value14").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value14").style.backgroundColor = "#d24525"
        }
        d3.select("#value15").text(values[34].split(":")[0].replaceAll("\"", ""));
        if (values[34].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value15").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value15").style.backgroundColor = "#d24525"
        }
        d3.select("#value16").text(values[35].split(":")[0].replaceAll("\"", ""));
        if (values[35].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value16").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value16").style.backgroundColor = "#d24525"
        }
        d3.select("#value17").text(values[37].split(":")[0].replaceAll("\"", ""));
        if (values[37].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value17").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value17").style.backgroundColor = "#d24525"
        }
        d3.select("#value18").text(values[38].split(":")[0].replaceAll("\"", ""));
        if (values[38].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value18").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value18").style.backgroundColor = "#d24525"
        }

        break;

        case "Sortierstrecke":
        document.getElementById("picture").src="pictures/Sortierstrecke.png";
        d3.select("#value1").text(values[14].split(":")[0].replaceAll("\"", ""));
        if (values[14].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value1").style.backgroundColor = "#d24525"
        }
        d3.select("#value2").text(values[25].split(":")[0].replaceAll("\"", ""));
        if (values[25].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value2").style.backgroundColor = "#d24525"
        }
        d3.select("#value3").text(values[16].split(":")[0].replaceAll("\"", ""));
        if (values[16].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value3").style.backgroundColor = "#d24525"
        }
        d3.select("#value4").text(values[17].split(":")[0].replaceAll("\"", ""));
        if (values[17].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value4").style.backgroundColor = "#d24525"
        }
        d3.select("#value5").text(values[18].split(":")[0].replaceAll("\"", ""));
        if (values[18].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value5").style.backgroundColor = "#d24525"
        }
        d3.select("#value6").text(values[39].split(":")[0].replaceAll("\"", ""));
        if (values[39].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value6").style.backgroundColor = "#d24525"
        }
        break;
        case "Sauggreifer":
        document.getElementById("picture").src="pictures/Sauggreifer.png";
        d3.select("#value1").text(values[27].split(":")[0].replaceAll("\"", ""));
        if (values[27].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value1").style.backgroundColor = "#d24525"
        }
        d3.select("#value2").text(values[28].split(":")[0].replaceAll("\"", ""));
        if (values[28].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value2").style.backgroundColor = "#d24525"
        }
        d3.select("#value3").text(values[29].split(":")[0].replaceAll("\"", ""));
        if (values[29].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#value3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#value3").style.backgroundColor = "#d24525"
        }
        d3.select("#value4").text(values[2].replace("{","").replace(":",": ").replaceAll("\"", ""));
        document.querySelector("#value4").style.backgroundColor = "#717e87"
        d3.select("#value5").text(values[3].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#value5").style.backgroundColor = "#717e87"
        d3.select("#value6").text(values[4].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#value6").style.backgroundColor = "#717e87"
        break;

        case"all":
        document.getElementById("pictureHochregal").src="pictures/Hochregallager.png";        
        d3.select("#inputHochregal1").text(values[21].split(":")[0].replaceAll("\"", ""));
        if (values[21].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal1").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal1").style.textAlign = "center"
        d3.select("#inputHochregal2").text(values[22].split(":")[0].replaceAll("\"", ""));
        if (values[22].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal2").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal2").style.textAlign = "center"
        d3.select("#inputHochregal3").text(values[23].split(":")[0].replaceAll("\"", ""));
        if (values[22].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal3").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal3").style.textAlign = "center"
        d3.select("#inputHochregal4").text(values[24].split(":")[0].replaceAll("\"", ""));
        if (values[24].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal4").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal4").style.textAlign = "center"
        d3.select("#inputHochregal5").text(values[25].split(":")[0].replaceAll("\"", ""));
        if (values[25].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal5").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal5").style.textAlign = "center"
        d3.select("#inputHochregal6").text(values[26].split(":")[0].replaceAll("\"", ""));
        if (values[26].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal6").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal6").style.textAlign = "center"
        d3.select("#inputHochregal7").text(values[32].split(":")[0].replaceAll("\"", ""));
        if (values[32].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputHochregal7").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputHochregal7").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputHochregal7").style.textAlign = "center"
        d3.select("#inputHochregal8").text(values[0].replace("{","").replace(":",": ").replaceAll("\"", ""));
        document.querySelector("#inputHochregal8").style.backgroundColor = "#717e87"
        document.querySelector("#inputHochregal8").style.textAlign = "center"
        d3.select("#inputHochregal9").text(values[1].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#inputHochregal9").style.backgroundColor = "#717e87"
        document.querySelector("#inputHochregal9").style.textAlign = "center"

        document.getElementById("pictureBrennofen").src="pictures/Brennofen.png";
        d3.select("#inputBrennofen1").text(values[5].split(":")[0].replaceAll("\"", ""));
        if (values[5].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen1").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen2").text(values[6].split(":")[0].replaceAll("\"", ""));
        if (values[6].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen2").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen3").text(values[7].split(":")[0].replaceAll("\"", ""));
        if (values[7].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen3").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen4").text(values[8].split(":")[0].replaceAll("\"", ""));
        if (values[8].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen4").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen5").text(values[9].split(":")[0].replaceAll("\"", ""));
        if (values[9].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen5").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen6").text(values[10].split(":")[0].replaceAll("\"", ""));
        if (values[10].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen6").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen7").text(values[11].split(":")[0].replaceAll("\"", ""));
        if (values[11].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen7").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen7").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen8").text(values[12].split(":")[0].replaceAll("\"", ""));
        if (values[12].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen8").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen8").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen9").text(values[13].split(":")[0].replaceAll("\"", ""));
        if (values[13].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen9").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen9").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen10").text(values[14].split(":")[0].replaceAll("\"", ""));
        if (values[14].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen10").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen10").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen11").text(values[30].split(":")[0].replaceAll("\"", ""));
        if (values[30].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen11").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen11").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen12").text(values[31].split(":")[0].replaceAll("\"", ""));
        if (values[31].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen12").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen12").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen13").text(values[32].split(":")[0].replaceAll("\"", ""));
        if (values[32].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen13").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen13").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen14").text(values[33].split(":")[0].replaceAll("\"", ""));
        if (values[33].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen14").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen14").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen15").text(values[34].split(":")[0].replaceAll("\"", ""));
        if (values[34].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen15").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen15").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen16").text(values[35].split(":")[0].replaceAll("\"", ""));
        if (values[35].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen16").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen16").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen17").text(values[37].split(":")[0].replaceAll("\"", ""));
        if (values[37].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen17").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen17").style.backgroundColor = "#d24525"
        }
        d3.select("#inputBrennofen18").text(values[38].split(":")[0].replaceAll("\"", ""));
        if (values[38].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputBrennofen18").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputBrennofen18").style.backgroundColor = "#d24525"
        }
        
        document.querySelector("#inputBrennofen1").style.textAlign = "center"
        document.querySelector("#inputBrennofen2").style.textAlign = "center"
        document.querySelector("#inputBrennofen3").style.textAlign = "center"
        document.querySelector("#inputBrennofen4").style.textAlign = "center"
        document.querySelector("#inputBrennofen5").style.textAlign = "center"
        document.querySelector("#inputBrennofen6").style.textAlign = "center"
        document.querySelector("#inputBrennofen7").style.textAlign = "center"
        document.querySelector("#inputBrennofen8").style.textAlign = "center"
        document.querySelector("#inputBrennofen9").style.textAlign = "center"
        document.querySelector("#inputBrennofen10").style.textAlign = "center"
        document.querySelector("#inputBrennofen11").style.textAlign = "center" 
        document.querySelector("#inputBrennofen12").style.textAlign = "center"
        document.querySelector("#inputBrennofen13").style.textAlign = "center"
        document.querySelector("#inputBrennofen14").style.textAlign = "center"
        document.querySelector("#inputBrennofen15").style.textAlign = "center" 
        document.querySelector("#inputBrennofen16").style.textAlign = "center"
        document.querySelector("#inputBrennofen17").style.textAlign = "center"
        document.querySelector("#inputBrennofen18").style.textAlign = "center"


        document.getElementById("pictureSauggreifer").src="pictures/Sauggreifer.png";
        d3.select("#inputSauggreifer1").text(values[14].split(":")[0].replaceAll("\"", ""));
        if (values[14].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer1").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSauggreifer2").text(values[25].split(":")[0].replaceAll("\"", ""));
        if (values[25].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer2").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSauggreifer3").text(values[16].split(":")[0].replaceAll("\"", ""));
        if (values[16].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer3").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSauggreifer4").text(values[17].split(":")[0].replaceAll("\"", ""));
        if (values[17].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer4").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer4").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSauggreifer5").text(values[18].split(":")[0].replaceAll("\"", ""));
        if (values[18].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer5").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer5").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSauggreifer6").text(values[39].split(":")[0].replaceAll("\"", ""));
        if (values[39].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSauggreifer6").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSauggreifer6").style.backgroundColor = "#d24525"
        }
        document.querySelector("#inputSauggreifer1").style.textAlign = "center"
        document.querySelector("#inputSauggreifer2").style.textAlign = "center"
        document.querySelector("#inputSauggreifer3").style.textAlign = "center"
        document.querySelector("#inputSauggreifer4").style.textAlign = "center"
        document.querySelector("#inputSauggreifer5").style.textAlign = "center"
        document.querySelector("#inputSauggreifer6").style.textAlign = "center"

        document.getElementById("pictureSortier").src="pictures/Sortierstrecke.png";
        d3.select("#inputSortier1").text(values[27].split(":")[0].replaceAll("\"", ""));
        if (values[27].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSortier1").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSortier1").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSortier2").text(values[28].split(":")[0].replaceAll("\"", ""));
        if (values[28].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSortier2").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSortier2").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSortier3").text(values[29].split(":")[0].replaceAll("\"", ""));
        if (values[29].split(":")[1].replace(" ", "").replaceAll("\"", "") == "true") {
            document.querySelector("#inputSortier3").style.backgroundColor = "#217446"
        } else {
            document.querySelector("#inputSortier3").style.backgroundColor = "#d24525"
        }
        d3.select("#inputSortier4").text(values[2].replace("{","").replace(":",": ").replaceAll("\"", ""));
        document.querySelector("#inputSortier4").style.backgroundColor = "#717e87"
        d3.select("#inputSortier5").text(values[3].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#inputSortier5").style.backgroundColor = "#717e87"
        d3.select("#inputSortier6").text(values[4].replaceAll("\"", "").replace(":",": "));
        document.querySelector("#inputSortier6").style.backgroundColor = "#717e87"

        document.querySelector("#inputSortier1").style.textAlign = "center"
        document.querySelector("#inputSortier2").style.textAlign = "center"
        document.querySelector("#inputSortier3").style.textAlign = "center"
        document.querySelector("#inputSortier4").style.textAlign = "center"
        document.querySelector("#inputSortier5").style.textAlign = "center"
        document.querySelector("#inputSortier6").style.textAlign = "center"
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
    d3.json("https://it2wi1.if-lab.de/rest/ft_ablauf").then(function (data, error) {
        empfangeDaten(data, error)
    });
}
