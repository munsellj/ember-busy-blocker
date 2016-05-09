import Ember from 'ember';
import Busy from '../mixins/busy';

const { Evented, Route, on, run } = Ember;

// Number of milliseconds to auto-hide busy blocker after it is shown
const AUTO_HIDE_TIMEOUT_MS = 3000;

export default Route.extend(Busy, Evented, {
  // Properties
  // ------------------------
  hideTimer: null,


  // Hooks
  // ------------------------
  _init: on('activate', function() {
    let busy = this.get('busy');
    // let self = this;

    // Add listeners to manage auto-hiding busy blocker for easy demonstration
    busy.on('hide', this, function afterAutoHide() {
      this.set('hideTimer', null);
    });
    busy.on('show', this, this._scheduleHide);
  }),


  // Functions
  // ------------------------
  _scheduleHide() {
    let busy = this.get('busy');
    let hideTimer = this.get('hideTimer');

    // Cancel previously scheduled hide if applicable
    if (hideTimer) {
      run.cancel(hideTimer);
    }

    // Auto-hide busy after 3 seconds
    hideTimer = run.later(this, function autoHide() {
      busy.hide();
    }, AUTO_HIDE_TIMEOUT_MS);

    this.set('hideTimer', hideTimer);
  }

  // Actions
  // ------------------------
});
