function Tag(attributes, actions) {
	this.attributes = attributes;
	this.actions = actions;
}

Tag.prototype.hasAction(action) {
	return this.actions.hasProperty(action);
}

Tag.prototype.hasAttribute(attribute) {
	return this.attributes.hasProperty(attribute);
}

Tag.prototype.getAction(action) {
	return this.actions[action];
}

module.exports = Tag;