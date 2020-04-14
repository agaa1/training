import { run } from '@ember/runloop';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('issue', 'Unit | Model | issue', {
  needs: [],
});

test('can create', function(assert) {
  let model = this.subject({ title: 'Title', description: 'desc'});
  assert.ok(!!model);

  assert.ok(model);
  assert.equal('Title', model.get('title'));
  assert.equal('desc', model.get('description'));
});


test('can update', function(assert) {
  let model = this.subject({ title: 'Title', description: 'desc'});
  assert.ok(!!model);

  run(() => model.set('title', 'Title2'));
  run(() => model.set('description', 'desc2'));
  assert.ok(model);
  assert.equal('Title2', model.get('title'));
  assert.equal('desc2', model.get('description'));
});
