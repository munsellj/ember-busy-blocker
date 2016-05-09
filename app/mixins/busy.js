import Ember from 'ember';

const { Mixin, inject } = Ember;

export default Mixin.create({
  // Inject the Busy Service
  busy: inject.service(),

  // Basic Action defaults to trigger show / hide
  actions: {
    busy(options) {
      this.get('busy').show(options);
    },
    free() {
      this.get('busy').hide();
    }
  }
});
