(function (console) { "use strict";
var PagesSet = function(parent_) {
	this.currentPageIndex = 0;
	this.parent = parent_;
};
PagesSet.prototype = {
	showPage: function(selector) {
		var _g = this;
		var page;
		if(((selector | 0) === selector)) page = js.JQuery(this.parent.children()[selector]); else if(typeof(selector) == "string") page = this.parent.find(selector); else page = selector;
		this.parent.children().each(function() {
			var that = js.JQuery(this);
			if(that[0] != page[0]) that.hide(); else {
				that.show();
				_g.currentPage = that;
				_g.currentPageId = that.attr("id");
				_g.currentPageIndex = that.index();
			}
		});
	}
	,nextPage: function() {
		var index = this.currentPageIndex + 1;
		var len = this.parent.children().length;
		if(index >= len) index -= len;
		this.showPage(index);
	}
	,previousPage: function() {
		var index = this.currentPageIndex - 1;
		if(index < 0) index += this.parent.children().length;
		this.showPage(index);
	}
};
var UIPages = function() { };
UIPages.main = function() {
	window.jQuery.prototype.uiPages = UIPages.uiPages;
};
UIPages.uiPages = function(parameter1) {
	var that = this;
	if(parameter1 == null) UIPages.createSet(that); else if(parameter1 == "next") UIPages.instances.h[that.__id__].nextPage(); else if(parameter1 == "previous") UIPages.instances.h[that.__id__].previousPage(); else if(parameter1 != null) UIPages.instances.h[that.__id__].showPage(parameter1);
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
};
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
UIPages.instances = new haxe_ds_ObjectMap();
haxe_ds_ObjectMap.count = 0;
UIPages.main();
})(typeof console != "undefined" ? console : {log:function(){}});
