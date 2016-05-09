import Ember from 'ember';

const { Evented, Service } = Ember;

export default Service.extend(Evented, {
  /**
   * Triggers hide of the busy blocker.
   * @method hide
   * @return {void}
   */
  hide() {
    this.trigger('hide');
  },

  /**
   * Triggers showing the busy blocker, passing along optinal options.
   * @method show
   * @param {Object} [options] An optional object containing options for the loading indicator
   *                           such as a custom message.
   * @return {void}
   */
  show(options) {
    this.trigger('show', options);
  }
});
