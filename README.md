Blague
=========

Ce plugin est un add-on pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

Fait des bruits d'animaux


## Installation

- Dézippez le fichier `Avatar-Plugin-bruitages-Master.zip` dans un répertoire temporaire
- Copiez le répertoire `bruitages` dans le répertoire `Avatar-Serveur/plugins`
- Copiez le fichier `intents/intent.bruitages.js`dans le répertoire `Avatar-Serveur/ia/intents/`
- Copiez le fichier `actions/action.sons.js` dans le répertoire `Avatar-Serveur/ia/actions/`
- Editez le fichier `Avatar-Serveur/ia/actions/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript
var _actionBruitages = require('./action.sons');

Object.defineProperty(exports, 'sons', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionBruitages).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/intents/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript

var _intentBruitages = require('./intent.bruitages');

Object.defineProperty(exports, 'bruitages', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intentBruitages).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/index.js`
	- Ajoutez dans l'import des intents, l'intention `bruitages`
	- Ajoutez dans l'import des actions, l'action `sons`
	- Ajoutez dans la fonction export.intent(), l'association de l'intention-action

```javascript
import { bruitages, tvChannels, tvActions, music, weather, hour,  manageAvatar, shoppingList, translate, lastAction, intentEnd} from './intents';
import { sons, freeTV, freeRules, Sonos, forecastMsn, forecastYahoo, worldHour, avatarRules, shopping, translator, backupAction, actionEnd} from './actions';


exports.intent = function () {

	// Configure the intents
	ava
	 .intent(translate, translator)
	 // Déclaration bruitages CI-DESSOUS !
	 .intent(bruitages, sons)
	 .intent(hour, worldHour)
	 .intent(weather, [forecastYahoo, forecastMsn])
	 .intent(music, Sonos)
	 .intent(manageAvatar, avatarRules)
	 .intent(shoppingList, shopping)
	 .intent(lastAction, backupAction)
	 .intent(intentEnd, actionEnd)  // Toujours à la fin, controle si une règle est passée
}
```

- Copiez le répertoire `animaux` dans le répertoire `Avatar-Client/app`

## Les commandes
Toutes les syntaxes de phrases qui comprennent ces mots peuvent être utilisées. Ce ne sont pas des règles fixes.

Les règles sont définies dans le tableau de syntaxes `bruitages`

Une seule syntaxe est définie. La règles doit inclure les mots **animal** ou **animaux**

Quelques exemples possibles:
- Fais des bruits d'animaux
- Imite un animal
...

Puis vous demandera quel animal faut il imiter:
La liste des animaux renseigné se trouve dans le bruitages.js

En exemple :
- La poule
- Le cochon

Il vous sera ensuite proposé d'en refaire un autre.
Réponse souhaitée :
- oui s'il te plait
- non merci

## Versions
Version 1.0 
- Version Released
