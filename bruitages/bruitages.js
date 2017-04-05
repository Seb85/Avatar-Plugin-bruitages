var Promise = require('q').Promise;

require('colors');

exports.action = function (data, callback) {

	info("Bruits animaux from:", data.client.yellow);

	Avatar.askme("Quel animal souhaites-tu que je fasse?", data.client,
	{
		"la poule" : "poule",
		"l'ours" : "ours",
		"le porc" : "porc",
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
				Avatar.play('%CD%/bruitages/poule.mp3', data.client);
				end (data.client, true);
				break;
			case "ours" :
				Avatar.play('%CD%/bruitages/ours.mp3', data.client);
				end (data.client, true);
				break;
			case "porc" :
				Avatar.play('%CD%/bruitages/porc.mp3', data.client);
				end (data.client, true);
				break;
		}
	});
}