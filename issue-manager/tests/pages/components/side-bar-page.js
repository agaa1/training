import { create, text } from 'ember-cli-page-object';
import { hook } from 'ember-hook';

export default create({
	titleText: text(hook('sb-title')),
	homeText: text(hook('sb-home')),
	summaryText: text(hook('sb-summary')),
	aboutText: text(hook('sb-about')),
	
});
