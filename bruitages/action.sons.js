'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
			
		for (var rule in Config.modules.bruitages.rules) {
			  var match = (0, _helpers.syntax)(state.sentence, Config.modules.bruitages.rules[rule]); 
			  if (match) break;
		}
		
		var room = Avatar.ia.clientFromRule (state.rawSentence);
		
		 setTimeout(function(){ 			
			if (match) {
				
				var value, tts = false;
				
				if (state.debug) info('ActionExec'.bold.yellow);
				
					state.action = {
						module: 'bruitages',
						command: rule,
						value: value,
						room: room		
					};	
			}		
				
			resolve(state);	
		}, 500);
	});
};



