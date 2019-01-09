# jQuery UIPages

A jQuery plugin to manage several pages in a HTML document.

## Demo

![Image](https://gogoprog.github.io/jquery-uipages/video.gif)

[Live demo](http://gogoprog.github.io/jquery-uipages/demo/)

## How to use

#### Create a group pages

    $(".parent_div").uiPages(showFunction, hideFunction);

#### Change current page

##### With absolute index

	$(".parent_div").uiPages(1);

##### With relative index

	$(".parent_div").uiPages("next");
	$(".parent_div").uiPages("previous");

##### With CSS selector

	$(".parent_div").uiPages(".something");
