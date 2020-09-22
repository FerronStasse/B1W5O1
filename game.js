var start = prompt("Wil je deze game spelen? Beantwoord met Ja of Nee");
var LowerStart = start.toLowerCase();

if(LowerStart == "ja"){
	var level1 = prompt("Je ben aangekomen in altanties, kiest uit deur 1 2 of 3");
	var Lowerlevel1 = parseInt(level1)

	if(Lowerlevel1 == 1 || Lowerlevel1 == 3){
		alert("Je heb de verkeerd deur gekozen");
		    document.write("Je ben bij level 1 gekomen!" + "<br>");
		    document.write("Reload jou pagina om opnieuwe te beginnnen!");
		}

		else if(Lowerlevel1 == 2){
			var level2 = prompt("Je heb de goede deur gekozen!, We komen een aardige persoon tegen die graag een apple wil. ga opzoek naar een apple, Voer links of right in.");
			var lowerlevel2 = level2.toLowerCase();
        }

        if(lowerlevel2 == "links"){
        	var level3 = prompt("Je heb een apple boom gevonden maar je heb zelf honger gekrijgen. voer in eten of brengen");
        	var lowerlevel3 = level3.toLowerCase();

        }
    }
        	if(lowerlevel3 == "eten"){
        		var level5 = prompt("Je heb nu zelf gegeten en pauze gehad. Voer, Go in om verder te gaan.");
        		var lowerlevel5 = level5.toLowerCase();

        	}

        		else if(lowerlevel3 == "brengen"){
        			alert("op de terug weg ben je zelf verhongerd en dood gegaan.");
        		    document.write("Je ben zelf vergeten te eten waardoor je dood ben gegaan" + "<br>");
        		    document.write("Mee aan je zelf denken...");
        	}
        

        else if(lowerlevel2 == "right"){
        	var level4 = prompt("Je zoek al een tijdje voor apple en je krijg zelf honger. Voer: Doorzoeken of Stoppen in? ");
        	var lowerlevel4 = level4.toLowerCase();
        }
        	if(lowerlevel4 == "doorzoeken"){
        		var level6 = prompt("Je heb een apple boom gevonden, je heb apple gegeten en de persoon achter gelaten en een pauze genomen Voer. Go in om verder te gaan.")
        		var lowerlevel6 = level6.toLowerCase();
        	}
        

        else if(lowerlevel4 == "stoppen"){
        	alert("Je ben gestop met zoeken en ging terug lopen onderweg ben je uitgehonger en dood gegaan");
        	document.write("Je ben dood gegaan omdat je niet verder ben gegaan met eten zoeken!");
        	document.write("blijf altijd door gaan ook als je denk dat je het niet gaat halen.");
        }

        if(lowerlevel6 == "go" || lowerlevel5 == "go"){
        	var level7 = prompt("text");
        }


else if(LowerStart == "nee"){
	alert("Je wilde het spel niet spelen.");
	    document.write("Reload jou pagina om te beginnen!.");
}
