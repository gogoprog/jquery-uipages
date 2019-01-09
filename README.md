# jQuery UIPages

A jQuery plugin to manage several pages in a HTML document.

## How to use

#### Define a set of pages

    $(".parent_div").uiPages(showFunction, hideFunction);
    
#### Change current page

##### With absolute index

	$(".parent_div").uiPages(1);
	
##### With CSS selector

	$(".parent_div").uiPages(".something");
	
##### With history
	$(".parent_div").uiPages("next");
	$(".parent_div").uiPages("previous");
