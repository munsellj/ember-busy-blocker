import Ember from 'ember';

const { Controller, inject } = Ember;

export default Controller.extend({
  // Dependencies
  // ------------------------
  busy: inject.service(),


  // Hooks
  // ------------------------


  // Functions
  // ------------------------


  // Actions
  // ------------------------
  actions: {
    heroAction() {
      this.get('busy').show({ message: '✋ Talk to the hand ✋' });
    },
    showBusy() {
      this.get('busy').show({ message: '❄️ Cool your jets ✈️' });
    }
  }
});
