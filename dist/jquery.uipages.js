(function (console, $global) { "use strict";
var PagesSet = function() { };
PagesSet.prototype = {
	__class__: PagesSet
};
var UIPages = function() { };
UIPages.main = function() {
	window.jQuery.prototype.uiPages = UIPages.uiPages;
};
UIPages.uiPages = function(parameters) {
	var that = this;
	if((parameters == null?null:js_Boot.getClass(parameters)) == String) UIPages.createSet(parameters,that);
};
UIPages.createSet = function(name,parent) {
	console.log("Creating set : " + name);
};
var haxe_IMap = function() { };
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var js_Boot = function() { };
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
String.prototype.__class__ = String;
var __map_reserved = {}
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
UIPages.instances = new haxe_ds_StringMap();
js_Boot.__toStr = {}.toString;
UIPages.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
