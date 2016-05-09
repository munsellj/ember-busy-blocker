# Ember Busy Blocker

A loading indicator that blocks user input while your app is busy doing stuff. This is intended to be used supplementally with [Ember's native loading substates](https://guides.emberjs.com/v2.5.0/routing/loading-and-error-substates/) when the application needs to block user input and show a loading indicator while processing information(e.g. when saving a model).

Check out the Test App on Github Pages for a live demo.

## Installation
`ember install ember-busy-blocker`

## Usage

* Add the `{{busy-blocker}}` component toward the bottom of the application template.
* Add styles. Can copy the default sample styles from `vendor/ember-busy-blocker.css` or use as an example and customize.
* Use Mixin or inject Service
* Call Busy service `show()` and `hide()` functions
* Can also trigger `busy` and `free` actions if using Mixin


## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


## Props
Shout out to [ember-cli-loading-slider](https://github.com/jerel/ember-cli-loading-slider) for inspiration.

## License
MIT License
