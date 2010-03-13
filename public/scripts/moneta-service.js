var Moneta = {}
Moneta.Service = function(url) {
	this.url = url;
	
	this.get = function(key, callback) {
		$.get(this.url + "/" + key, {}, callback);
	}
	this.set = function(key, value, callback) {
		$.post(this.url + "/" + key, { "key": key, "value": value }, callback);
	}
	this.remove = function(key, callback) {
		$.post(this.url + "/" + key + "/delete", {}, callback);
	}
	this.has_key = function(key, callback) {
		$.post(this.url + "/" + key + "/has_key", {}, callback);
	}
	this.store = function(key, value, options, callback) {
		$.post(this.url + "/" + key + "/store", { "key": key, "value": value, "options": $.toJSON(options) }, callback);
	}
	this.update_key = function(key, options, callback) {
		$.post(this.url + "/" + key + "/update_key", { "key": key, "options": $.toJSON(options) }, callback);
	}
	this.clear = function(callback) {
		$.post(this.url + "/" + key + "/clear", {}, callback);
	}
}
/*
	var m = new MonetaService("http://localhost:4567/store");
	m.set("hello", "world", function(data) {});
	
	var d;
	m.get("hello", function(data) { d = data });
	
	d // => "world"
*/
