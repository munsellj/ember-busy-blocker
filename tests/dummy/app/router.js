import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

/* eslint-disable array-callback-return */
Router.map(function() {
  // Routes go here
});
/* eslint-enable array-callback-return */

export default Router;
