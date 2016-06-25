(function (console) { "use strict";
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
var js_PagesSet = function(parent_,showOptions_,hideOptions_) {
	this.currentPageIndex = 0;
	this.parent = parent_;
	this.showOptions = showOptions_;
	this.hideOptions = hideOptions_;
};
js_PagesSet.prototype = {
	showPage: function(selector) {
		var _g = this;
		var page;
		if(((selector | 0) === selector)) page = js.JQuery(this.parent.children()[selector]); else if(typeof(selector) == "string") page = this.parent.find(selector); else page = selector;
		this.parent.children().each(function() {
			var that = js.JQuery(this);
			if(that[0] != page[0]) that.hide(_g.hideOptions); else {
				that.show(_g.showOptions);
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
var js_UIPages = function() { };
js_UIPages.main = function() {
	window.jQuery.prototype.uiPages = js_UIPages.uiPages;
};
js_UIPages.uiPages = function(parameter1,parameter2) {
	var that = this;
	if(parameter1 == null || parameter1 != null && parameter2 != null) js_UIPages.createSet(that,parameter1,parameter2); else if(parameter1 == "next") js_UIPages.instances.h[that.__id__].nextPage(); else if(parameter1 == "previous") js_UIPages.instances.h[that.__id__].previousPage(); else if(parameter1 != null) js_UIPages.instances.h[that.__id__].showPage(parameter1);
	return that;
};
js_UIPages.createSet = function(parent,showOptions,hideOptions) {
	var instance = new js_PagesSet(parent,showOptions,hideOptions);
	{
		js_UIPages.instances.set(parent,instance);
		instance;
	}
	return instance;
};
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
haxe_ds_ObjectMap.count = 0;
js_UIPages.instances = new haxe_ds_ObjectMap();
js_UIPages.main();
})(typeof console != "undefined" ? console : {log:function(){}});
