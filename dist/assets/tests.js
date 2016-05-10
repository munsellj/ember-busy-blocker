define('dummy/tests/acceptance/busy-test', ['exports', 'ember', 'qunit', 'dummy/tests/helpers/destroy-app', 'dummy/tests/helpers/module-for-acceptance', 'dummy/tests/helpers/start-app'], function (exports, _ember, _qunit, _dummyTestsHelpersDestroyApp, _dummyTestsHelpersModuleForAcceptance, _dummyTestsHelpersStartApp) {
  var $ = _ember['default'].$;

  var application = undefined;

  (0, _dummyTestsHelpersModuleForAcceptance['default'])('Acceptance | busy', {
    beforeEach: function beforeEach() {
      application = (0, _dummyTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      (0, _dummyTestsHelpersDestroyApp['default'])(application);
    }
  });

  // General e2e test
  (0, _qunit.test)('the component shows, hides and can take a custom message', function (assert) {
    visit('/');

    andThen(function () {
      var busyElem = $('.busy-blocker');
      var busyAnimElems = $('.busy-blocker__bg, .busy-blocker__content');

      assert.equal(busyElem.css('display'), 'none', 'The component is hidden at start');

      // Trigger show of busy blocker by clicking the hero button
      click('.jumbotron button');

      // Verify animation and message after shown
      _ember['default'].run.later(function () {
        assert.equal(busyElem.css('display'), 'block', 'The component is displayed');
        assert.ok(busyAnimElems.hasClass('fade-in'), 'The animation elements have the "fade-in" class');
        assert.equal(busyElem.find('.busy-blocker__message').text().trim(), '✋ Talk to the hand ✋', 'The message can be customized');
      }, 500);

      // Dummy app auto-hides busy blocker after 3 seconds
      _ember['default'].run.later(function () {
        assert.equal(busyElem.css('display'), 'none', 'The component is not displayed after hide');
        assert.ok(busyAnimElems.hasClass('fade-out'), 'The animation elements have the "fade-out" class');
      }, 4000);
    });
  });

  // Test for Mixin actions
  (0, _qunit.test)('the mixin works', function (assert) {
    visit('/');

    andThen(function () {
      var busyElem = $('.busy-blocker');
      var busyAnimElems = $('.busy-blocker__bg, .busy-blocker__content');

      assert.equal(busyElem.css('display'), 'none', 'The component is hidden at start');

      // Trigger show of busy blocker by clicking the button using the mixin action
      click('.js-busy-mixin-btn');

      // Verify animation after shown
      _ember['default'].run.later(function () {
        assert.equal(busyElem.css('display'), 'block', 'The component is displayed');
        assert.ok(busyAnimElems.hasClass('fade-in'), 'The animation elements have the "fade-in" class');
        assert.equal(busyElem.find('.busy-blocker__message').text().trim(), 'Loading...', 'The default message is shown');

        // Trigger hide quickly via click of hidden button using the mixin action
        click('.js-free-mixin-btn');
      }, 500);

      /**
       * Verify hide shortly after show and trigger of hide. Need to wait for animation to
       * complete(300ms by default) before checking.
       */
      _ember['default'].run.later(function () {
        assert.equal(busyElem.css('display'), 'none', 'The component is not displayed after hide');
        assert.ok(busyAnimElems.hasClass('fade-out'), 'The animation elements have the "fade-out" class');
      }, 850);
    });
  });
});
define('dummy/tests/acceptance/busy-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - acceptance/busy-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/busy-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/controllers/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _dummyTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;
    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);

    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/routes/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint.\n');
  });
});
define('dummy/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/services/busy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:busy', 'Unit | Service | busy', {
    // Specify the other units that are required for this test.
  });

  (0, _emberQunit.test)('it triggers show and hide events', function (assert) {
    var service = this.subject();

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

  (0, _emberQunit.test)('it accepts and passes along options for show()', function (assert) {
    var MESSAGE = 'We busy yo';
    var service = this.subject();

    assert.expect(2);

    service.on('show', this, function onShow(options) {
      assert.ok(options, 'call to service.show() passed along options');
      assert.equal(options.message, MESSAGE, 'passed message was received in options');
    });

    service.show({ message: MESSAGE });
  });
});
define('dummy/tests/unit/services/busy-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/busy-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/busy-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map