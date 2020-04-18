import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { initialize } from 'ember-hook';
import page from '../../pages/components/side-bar-page';
import { waitUntil } from 'ember-native-dom-helpers';

moduleForComponent('side-bar', 'Integration | Component | side-bar', {
	integration: true,
	
	beforeEach() {
		page.setContext(this);
		initialize();
	},
	afterEach() {
		page.removeContext(this);
	},
});

test('renders', function(assert) {
	this.render(hbs`{{side-bar}}`);

	waitUntil(() => page.titleText);
	assert.equal(page.titleText, 'Side Bar');
	assert.equal(page.homeText, 'Home');
	assert.equal(page.summaryText, 'Summary');
	assert.equal(page.aboutText, 'About');
});
