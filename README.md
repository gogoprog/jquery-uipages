# jQuery UIPages

A jQuery plugin to manage several pages in a HTML document.

## Demo

![Image](https://gogoprog.github.io/jquery-uipages/video.gif)

[Live demo](http://gogoprog.github.io/jquery-uipages/demo/)

## Example

```javascript
    var container = $("#pages").uiPages({effect : "scale"}, {effect : "scale"});
    container.uiPages(".home")
```

See [demo code](https://github.com/gogoprog/jquery-uipages/blob/master/demo/demo.js)

## How to use

#### Create a group pages

```javascript
    $(".parent_div").uiPages(showArg, hideArg);
```

#### Change current page

##### With absolute index

```javascript
    $(".parent_div").uiPages(1);
```

##### With relative index

```javascript
    $(".parent_div").uiPages("next");
    $(".parent_div").uiPages("previous");
```

##### With CSS selector

```javascript
    $(".parent_div").uiPages(".something");
```
