(function (console, $global) { "use strict";
var PagesSet = function(parent_) {
	this.parent = parent_;
};
PagesSet.prototype = {
	showPage: function(selector) {
		var _g = this;
		var page = this.parent.find(selector);
		this.parent.children().each(function() {
			var that = js.JQuery(this);
			if(that[0] != page[0]) that.hide(); else {
				that.show();
				_g.currentPage = that;
				_g.currentPageId = that.attr("id");
			}
		});
	}
	,__class__: PagesSet
};
var UIPages = function() { };
UIPages.main = function() {
	window.jQuery.prototype.uiPages = UIPages.uiPages;
};
UIPages.uiPages = function(parameter1,parameter2) {
	var that = this;
	if(parameter1 == null && parameter2 == null) UIPages.createSet(that); else if((parameter1 == null?null:js_Boot.getClass(parameter1)) == String) UIPages.instances.h[that.__id__].showPage(parameter1);
	return that;
};
UIPages.createSet = function(parent) {
	var instance = new PagesSet(parent);
	{
		UIPages.instances.set(parent,instance);
		instance;
	}
	return instance;
};
var haxe_IMap = function() { };
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe_ds_ObjectMap
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
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
UIPages.instances = new haxe_ds_ObjectMap();
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = {}.toString;
UIPages.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
