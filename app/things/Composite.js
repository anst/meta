var _ = require('lodash');

function Composite(options) {
	this.components = {};
	for (key in options) {
		if (_.isString(options[key])) {

		}
	}
}

Composite.prototype.hasAction(action) {
	for (key in components) {
		if (components[key].hasAction(action)) {
			return true;
		}
	}
	return false;
}

Composite.prototype.getAction(action) {
	for (key in components) {
		if (components[key].hasAction(action)) {
			return component[key].getAction(action);
		}
	}
	return function() {};
}

module.exports = Composite;
