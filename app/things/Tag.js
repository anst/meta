function Tag(attributes, actions) {
	this.attributes = attributes;
	this.actions = actions;
}

Tag.prototype.hasAction = function(action) {
	return this.actions.hasProperty(action);
}

Tag.prototype.hasAttribute = function(attribute) {
	return this.attributes.hasProperty(attribute);
}

Tag.prototype.getAction = function(action) {
	return this.actions[action];
}

module.exports = Tag;