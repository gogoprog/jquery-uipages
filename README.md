# jQuery UIPages

### A jQuery plugin to manage several pages in a html document

## How to use

#### Instanciate a set of pages

    $(".parent_div").uiPages(showFunction, hideFunction);
    
#### Change current page

	$(".parent_div").uiPages(1);
	$(".parent_div").uiPages(".something");
	$(".parent_div").uiPages("next");
	$(".parent_div").uiPages("previous");
