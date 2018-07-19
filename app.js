var Emiter = require('./emitter');
var eventType = require('./config');
var emtr = new Emiter;

var obj1 = {
	sayHello: function() {
		console.log("hello from object 1");
	}
}

var obj2 = {
	sayHello: function() {
		console.log("hello from object 2");
	}
}

emtr.addListener(eventType.GREET, obj1.sayHello);
emtr.addListener(eventType.GREET, obj2.sayHello);
emtr.emit(eventType.GREET);