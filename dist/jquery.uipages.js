(function (console) { "use strict";
var UIPages = function() { };
UIPages.main = function() {
	window.jQuery.prototype.uiPages = UIPages.uiPages;
};
UIPages.uiPages = function() {
	console.log("Hello");
};
UIPages.main();
})(typeof console != "undefined" ? console : {log:function(){}});
