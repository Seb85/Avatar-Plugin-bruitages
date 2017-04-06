var Promise = require('q').Promise;

require('colors');

exports.action = function (data, callback) {

	info("Bruits animaux from:", data.client.yellow);

	start(data.client);
	
	callback();
}



function start(client) {


    Avatar.askme("Quel animal souhaites-tu que je fasse?", client,
	{
		"la poule" : "poule",
		"l'ours" : "ours",
		"le port" : "cochon",
		"le cochon" : "cochon",
		"le grillon" : "grillon",
		"le chien de prairie" : "chienprairie",
		"le hérisson" : "hérisson",
		"le lapin" : "lapin",
		"le lémurien" : "lémurien",
		"le jaguar" : "jaguar",
		"le lama" : "lama",
		"le lion" : "lion",
		"le serpent" : "serpent",
		"le rat" : "rat",
		"la souris" : "souris",
		"la vache" : "vache",
		"le chat" : "chat",
		"le cheval" : "cheval",
		"le chien" : "chien",
		"la baleine" : "baleine",
		"le canard" : "canard",
		"le bouc" : "bouc",
		"le cerf" : "cerf",
		"le chameau" : "chameau",
		"le dromadaire" : "dromadaire",
		"l'écureuil" : "écureuil",
		"le crocodile" : "crocodile",
		"l'éléphant" : "éléphant",
		"le gorille" : "gorille",
		"le crapaud" : "crapaud",
		"le cochon d'inde" : "cochondinde",
		"la chèvre" : "chèvre",
		"le couguar" : "couguar",
		"la chauve souris" : "chauvesouris",
		"le dauphin" : "dauphin",
		"le dingo" : "dingo",
		"le chamois" : "chamois",
		"le chevreau" : "chevreau",
		"la cigale" : "cigale",
		"la grenouille" : "grenouille",
		"le loup" : "loup",
		"le mouton" : "mouton",
		"la marmotte" : "marmotte",
		"la sauterelle" : "sauterelle",
		"le coyote" : "coyote",
		"le criquet" : "criquet",
		"le diable de Tasmanie" : "diable",
		"le guépard" : "guépard",
		"la hyène" : "hyène",
		"le moustique" : "moustique",
		"l'abeille" : "abeille",
		"le bourdon" : "bourdon",
		"le blaireau" : "blaireau",
		"l'ane" : "ane",
		"l'agneau" : "agneau",
		"le singe" : "singe",
		"le lynx" : "lynx",
		"le loutre" : "loutre",
		"le lézard" : "lézard",
		"le léopard" : "léopard",
		"le poussin" : "poussin",
		"le taureau" : "taureau",
		"le veau" : "veau",
		"la vipère" : "vipère",
		"la panthère" : "panthère",
		"le tigre" : "tigre",
		"le bison" : "bison",
		"le fennec" : "fennec",
		"le zèbre" : "zèbre"
	},0, function (answer, end) {
		switch (answer) {
		
			case "poule" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/poule.mp3', client);
				break;
			
			case "canard" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/canard.mp3', client);
				break;
			
			case "cochon" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/cochon.mp3', client);
				break;
				
			case "grillon" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/grillon.mp3', client);
				break;
				
			case "chienprairie" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chienprairie.mp3', client);
				break;
				
			case "hérisson" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/hérisson.mp3', client);
				break;
				
			case "lapin" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lapin.mp3', client);
				break;
				
			case "lémurien" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lémurien.mp3', client);
				break;
				
			case "jaguar" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/jaguar.mp3', client);
				break;
				
			case "lama" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lama.mp3', client);
				break;
				
			case "lion" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lion.mp3', client);
				break;
				
			case "serpent" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/serpent.mp3', client);
				break;
				
			case "rat" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/rat.mp3', client);
				break;
				
			case "souris" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/souris.mp3', client);
				break;
				
			case "vache" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/vache.mp3', client);
				break;
				
			case "chat" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chat.mp3', client);
				break;
				
			case "cheval" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/cheval.mp3', client);
				break;
				
			case "chien" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chien.mp3', client);
				break;
				
			case "baleine" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/baleine.mp3', client);
				break;
				
			case "canard" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/canard.mp3', client);
				break;
				
			case "bouc" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/bouc.mp3', client);
				break;
				
			case "cerf" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/cerf.mp3', client);
				break;
				
			case "chameau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chameau.mp3', client);
				break;
				
			case "dromadaire" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/dromadaire.mp3', client);
				break;
				
			case "crocodile" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/crocodile.mp3', client);
				break;
				
			case "éléphant" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/éléphant.mp3', client);
				break;
				
			case "gorille" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/gorille.mp3', client);
				break;
				
			case "crapaud" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/crapaud.mp3', client);
				break;
				
			case "crapaud" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/crapaud.mp3', client);
				break;
				
			case "cochondinde" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/cochondinde.mp3', client);
				break;
				
			case "chèvre" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chèvre.mp3', client);
				break;
				
			case "couguar" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/couguar.mp3', client);
				break;
				
			case "chauvesouris" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chauvesouris.mp3', client);
				break;
				
			case "dauphin" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/dauphin.mp3', client);
				break;
				
			case "dingo" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/dingo.mp3', client);
				break;
				
			case "chamois" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chamois.mp3', client);
				break;
				
			case "chevreau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/chevreau.mp3', client);
				break;
				
			case "cigale" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/cigale.mp3', client);
				break;
				
			case "grenouille" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/grenouille.mp3', client);
				break;
				
			case "loup" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/loup.mp3', client);
				break;
				
			case "mouton" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/mouton.mp3', client);
				break;
				
			case "marmotte" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/marmotte.mp3', client);
				break;
				
			case "sauterelle" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/sauterelle.mp3', client);
				break;
				
			case "coyote" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/coyote.mp3', client);
				break;
				
			case "criquet" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/criquet.mp3', client);
				break;
				
			case "diable" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/diable.mp3', client);
				break;
				
			case "guépard" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/guépard.mp3', client);
				break;
				
			case "hyène" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/hyène.mp3', client);
				break;
				
			case "moustique" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/moustique.mp3', client);
				break;
				
			case "abeille" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/abeille.mp3', client);
				break;
				
			case "bourdon" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/bourdon.mp3', client);
				break;
				
			case "blaireau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/blaireau.mp3', client);
				break;
				
			case "ane" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/ane.mp3', client);
				break;
				
			case "agneau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/agneau.mp3', client);
				break;
				
			case "singe" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/singe.mp3', client);
				break;
				
			case "lynx" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lynx.mp3', client);
				break;
				
			case "loutre" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/loutre.mp3', client);
				break;
				
			case "lézard" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/lézard.mp3', client);
				break;
				
			case "léopard" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/léopard.mp3', client);
				break;
				
			case "poussin" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/poussin.mp3', client);
				break;
				
			case "taureau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/taureau.mp3', client);
				break;
				
			case "veau" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/veau.mp3', client);
				break;
				
			case "vipère" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/vipère.mp3', client);
				break;
				
			case "panthère" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/panthère.mp3', client);
				break;
				
			case "tigre" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/tigre.mp3', client);
				break;
				
			case "bison" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/bison.mp3', client);
				break;
				
			case "fennec" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/fennec.mp3', client);
				break;
				
			case "zèbre" :
				end (client);
				// Fonction play...
				play('%CD%/animaux/zèbre.mp3', client);
				break;
				
			default:
				// stop le end du askme ET REMET le son avec le true SI LE TIMER DU ASKME est arrivé à son terme.
				// Toujours penser si rien n'est dit, alors que'est ce qu'on fait...
				end (client, true);
		}
	});

}



function play(file, client) {

	// joue le mp3
	Avatar.play(file, client, function() { 
		// Demande un autre ?
		Avatar.askme("Un autre ?", client,
		{
			"oui s'il te plait" : "again",
			"non merci" : "stop"
		} ,0, function (answer, end) {
			switch (answer) {
				case "again" :
					// stop le end du askme mais ne remet pas le son
					end (client);	
					// Redémarre le askme
					start(client);	
					break;
				default:
				case "stop" :
					// stop le end du askme ET REMET le son avec le true parce que terminé
					end (client, true);
					Avatar.speak("d'accord", client);
					break;
			}
		});
	});

}
