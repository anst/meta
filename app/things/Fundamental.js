function Fundamental(tags) {
	this.tags = tags;
}

Fundamental.prototype.hasAction = function(action) {
	for (key in tags) {
		if (tags[key].hasAction(action)) {
			return true;
		}
	}
	return false;
}

 Fundamental.prototype.getAction = function(action) {
 	for (key in tags) {
 		if (tags[key].hasAction(action)) {
 			return tags[key].getAction(action);
 		}
 	}
 	return function() {}
 }

module.exports = Fundamental;