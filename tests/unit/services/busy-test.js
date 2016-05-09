import { moduleFor, test } from 'ember-qunit';

moduleFor('service:busy', 'Unit | Service | busy', {
  // Specify the other units that are required for this test.
});

test('it triggers show and hide events', function(assert) {
  let service = this.subject();

  assert.expect(2);

  service.on('hide', this, function onHide() {
    assert.ok(true, 'call to service.hide() triggers "hide" event');
  });

  service.on('show', this, function onShow() {
    assert.ok(true, 'call to service.show() triggers "show" event');
  });

  service.hide();
  service.show();
});

test('it accepts and passes along options for show()', function(assert) {
  const MESSAGE = 'We busy yo';
  let service = this.subject();

  assert.expect(2);

  service.on('show', this, function onShow(options) {
    assert.ok(options, 'call to service.show() passed along options');
    assert.equal(options.message, MESSAGE, 'passed message was received in options');
  });

  service.show({ message: MESSAGE });
});
