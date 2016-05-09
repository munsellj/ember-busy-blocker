import Ember from 'ember';
import { test } from 'qunit';
import destroyApp from '../../tests/helpers/destroy-app';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import startApp from '../../tests/helpers/start-app';

const { $ } = Ember;

let application;

moduleForAcceptance('Acceptance | busy', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    destroyApp(application);
  }
});

// General e2e test
test('the component shows, hides and can take a custom message', function(assert) {
  visit('/');

  andThen(function() {
    let busyElem = $('.busy-blocker');
    let busyAnimElems = $('.busy-blocker__bg, .busy-blocker__content');

    assert.equal(busyElem.css('display'), 'none',
      'The component is hidden at start');

    // Trigger show of busy blocker by clicking the hero button
    click('.jumbotron button');

    // Verify animation and message after shown
    Ember.run.later(() => {
      assert.equal(busyElem.css('display'), 'block',
        'The component is displayed');
      assert.ok(busyAnimElems.hasClass('fade-in'),
        'The animation elements have the "fade-in" class');
      assert.equal(busyElem.find('.busy-blocker__message').text().trim(),
        '✋ Talk to the hand ✋',
        'The message can be customized');
    }, 500);

    // Dummy app auto-hides busy blocker after 3 seconds
    Ember.run.later(() => {
      assert.equal(busyElem.css('display'), 'none',
        'The component is not displayed after hide');
      assert.ok(busyAnimElems.hasClass('fade-out'),
        'The animation elements have the "fade-out" class');
    }, 4000);
  });
});

// Test for Mixin actions
test('the mixin works', function(assert) {
  visit('/');

  andThen(function() {
    let busyElem = $('.busy-blocker');
    let busyAnimElems = $('.busy-blocker__bg, .busy-blocker__content');

    assert.equal(busyElem.css('display'), 'none',
      'The component is hidden at start');

    // Trigger show of busy blocker by clicking the button using the mixin action
    click('.js-busy-mixin-btn');

    // Verify animation after shown
    Ember.run.later(() => {
      assert.equal(busyElem.css('display'), 'block',
        'The component is displayed');
      assert.ok(busyAnimElems.hasClass('fade-in'),
        'The animation elements have the "fade-in" class');
      assert.equal(busyElem.find('.busy-blocker__message').text().trim(),
        'Loading...',
        'The default message is shown');

      // Trigger hide quickly via click of hidden button using the mixin action
      click('.js-free-mixin-btn');
    }, 500);

    /**
     * Verify hide shortly after show and trigger of hide. Need to wait for animation to
     * complete(300ms by default) before checking.
     */
    Ember.run.later(() => {
      assert.equal(busyElem.css('display'), 'none',
        'The component is not displayed after hide');
      assert.ok(busyAnimElems.hasClass('fade-out'),
        'The animation elements have the "fade-out" class');
    }, 850);
  });
});
