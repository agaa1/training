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

test('renders', async function(assert) {
	await this.render(hbs`{{side-bar}}`);

	await waitUntil(() => page.titleText);
	assert.equal(page.titleText, 'Side Bar');
	assert.equal(page.homeLink.text, 'Home');
	assert.equal(page.summaryLink.text, 'Summary');
	assert.equal(page.aboutLink.text, 'About');
});
