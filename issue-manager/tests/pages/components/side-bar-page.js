import { create, text, clickable } from 'ember-cli-page-object';
import { hook } from 'ember-hook';

export default create({
	titleText: text(hook('sb-title')),

  homeLink: {
    scope: hook('sb-home'),
    click: clickable(),
    text: text(),
  },
  summaryLink: {
    scope: hook('sb-summary'),
    click: clickable(),
    text: text(),
  },
  aboutLink: {
    scope: hook('sb-about'),
    click: clickable(),
    text: text(),
  },
});
