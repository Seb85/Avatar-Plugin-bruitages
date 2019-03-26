exports.action = function (data, callback) {
	let client = setClient(data);
	info("Bruits animaux:", "From:", data.client, "To:", client);
	
	start(data, client);
	
	callback();
}

function start(data, client) {

    Avatar.askme("Quel animal souhaites-tu que je fasse?", data.client,
	{
		"*": "generic",
        "terminer": "done"
	},0, function (answer, end) {

          if (answer && answer.indexOf('generic') != -1) {
              end(data.client);
              answer = answer.split(':')[1];

              if (answer.indexOf('poule') != -1) {
				return play('%CD%/animaux/poule.mp3', data, client);
				
              }

              if (answer.indexOf('canard') != -1) {
				return play('%CD%/animaux/canard.mp3', data, client);
				
              }

              if (answer.indexOf('cochon') != -1) {
				return play('%CD%/animaux/cochon.mp3', data, client);
              }
			  
			  if (answer.indexOf('grillon') != -1) {
				return play('%CD%/animaux/grillon.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chienprairie') != -1) {
				return play('%CD%/animaux/chienprairie.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('hérisson') != -1) {
				return play('%CD%/animaux/hérisson.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lapin') != -1) {
				return play('%CD%/animaux/lapin.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lémurien') != -1) {
				return play('%CD%/animaux/lémurien.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('jaguar') != -1) {
				return play('%CD%/animaux/jaguar.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lama') != -1) {
				return play('%CD%/animaux/lama.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lion') != -1) {
				return play('%CD%/animaux/lion.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('serpent') != -1) {
				return play('%CD%/animaux/serpent.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('rat') != -1) {
				return play('%CD%/animaux/rat.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('souris') != -1) {
				return play('%CD%/animaux/souris.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('vache') != -1) {
				return play('%CD%/animaux/vache.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chat') != -1) {
				return play('%CD%/animaux/chat.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('cheval') != -1) {
				return play('%CD%/animaux/cheval.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chien') != -1) {
				return play('%CD%/animaux/chien.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('baleine') != -1) {
				return play('%CD%/animaux/baleine.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('canard') != -1) {
				return play('%CD%/animaux/canard.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('bouc') != -1) {
				return play('%CD%/animaux/bouc.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('cerf') != -1) {
				return play('%CD%/animaux/cerf.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chameau') != -1) {
				return play('%CD%/animaux/chameau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('dromadaire') != -1) {
				return play('%CD%/animaux/dromadaire.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('crocodile') != -1) {
				return play('%CD%/animaux/crocodile.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('éléphant') != -1) {
				return play('%CD%/animaux/elephant.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('crapaud') != -1) {
				return play('%CD%/animaux/crapaud.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('cochondinde') != -1) {
				return play('%CD%/animaux/cochondinde.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('gorille') != -1) {
				return play('%CD%/animaux/gorille.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chèvre') != -1) {
				return play('%CD%/animaux/chevre.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('cougar') != -1) {
				return play('%CD%/animaux/cougar.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chauvesouris') != -1) {
				return play('%CD%/animaux/chauvesouris.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('dauphin') != -1) {
				return play('%CD%/animaux/dauphin.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('dingo') != -1) {
				return play('%CD%/animaux/dingo.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('chevreau') != -1) {
				return play('%CD%/animaux/chevreau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('cigale') != -1) {
				return play('%CD%/animaux/cigale.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('grenouille') != -1) {
				return play('%CD%/animaux/grenouille.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('loup') != -1) {
				return play('%CD%/animaux/loup.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('mouton') != -1) {
				return play('%CD%/animaux/mouton.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('marmotte') != -1) {
				return play('%CD%/animaux/marmotte.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('sauterelle') != -1) {
				return play('%CD%/animaux/sauterelle.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('coyote') != -1) {
				return play('%CD%/animaux/coyote.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('criquet') != -1) {
				return play('%CD%/animaux/criquet.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('diable') != -1) {
				return play('%CD%/animaux/diable.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('guépard') != -1) {
				return play('%CD%/animaux/guépard.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('hyene') != -1) {
				return play('%CD%/animaux/hyene.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('moustique') != -1) {
				return play('%CD%/animaux/moustique.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('abeille') != -1) {
				return play('%CD%/animaux/abeille.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('bourdon') != -1) {
				return play('%CD%/animaux/bourdon.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('blaireau') != -1) {
				return play('%CD%/animaux/blaireau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('âne') != -1) {
				return play('%CD%/animaux/ane.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('agneau') != -1) {
				return play('%CD%/animaux/agneau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('singe') != -1) {
				return play('%CD%/animaux/singe.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lynx') != -1) {
				return play('%CD%/animaux/lynx.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('loutre') != -1) {
				return play('%CD%/animaux/loutre.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('lézard') != -1) {
				return play('%CD%/animaux/lézard.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('léopard') != -1) {
				return play('%CD%/animaux/léopard.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('poussin') != -1) {
				return play('%CD%/animaux/poussin.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('taureau') != -1) {
				return play('%CD%/animaux/taureau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('vipère') != -1) {
				return play('%CD%/animaux/vipère.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('veau') != -1) {
				return play('%CD%/animaux/veau.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('panthère') != -1) {
				return play('%CD%/animaux/panthère.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('tigre') != -1) {
				return play('%CD%/animaux/tigre.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('bison') != -1) {
				return play('%CD%/animaux/bison.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('fennec') != -1) {
				return play('%CD%/animaux/fennec.mp3', data, client);
				
              }
			  
			  if (answer.indexOf('zèbre') != -1) {
				return play('%CD%/animaux/zèbre.mp3', data, client);
				
              }

              return Avatar.speak("Je suis désolé, je n'ai pas compris.", data.client, function(){
                  start(data, client)
				  end(data.client);	
              });
          }

          // Grammaire fixe
          switch(answer) {
            case "done":
            default:
                Avatar.speak("Terminé", data.client, function(){
                    end(data.client, true);
                });
         }
      })		
}		

function play(file, data, client) {
	Avatar.play(file, client, function() { 
    Avatar.askme("Un autre ?", data.client,
	{
			"*": "generic",
			"oui s'il te plait" : "again",
			"oui" : "again",
			"non merci" : "stop",
			"non" : "stop",
			"merci" : "stop",
			"terminer": "stop"
	},0, function (answer, end) {

            
			if (answer && answer.indexOf('generic') != -1) {
			end(data.client);
			return Avatar.speak("Je n'ai pas compris.", data.client, function(){
                  start(data, client)
				  end(data.client);	
            });
			}

			// Grammaire fixe
			switch(answer) {
			
			case "again":
                end(data.client);		
				start(data, client);	
				break;
			
            case "stop":
            default:
                Avatar.speak("Terminé", data.client, function(){
                    end(data.client, true);
                });
         }
      })
	});
}	

function setClient (data) {

	var client = data.client;

	if (data.action.room)
		client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;

	if (data.action.setRoom)
		client = data.action.setRoom;

	return client;
}