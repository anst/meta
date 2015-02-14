 function ThingStore() {
 	this.things = [];
 }

 ThingStore.prototype.registerThing = function(name, thing) {
 	this.things[name] = thing;
 }

 ThingStore.prototype.getThing = function(name) {
 	return this.things[name];
 }

 module.exports = function() {
 	global.store = new ThingStore();
 }
