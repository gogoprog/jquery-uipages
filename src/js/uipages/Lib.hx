package js.uipages;

import js.Browser;
import js.jquery.JQuery;

class Lib {
    static function main() {
        untyped Browser.window.jQuery.prototype["uiPages"] = uiPages;
    }

    static var instances = new Map<JQuery, Group>();

    static function uiPages(?parameter1, ?parameter2) {
        var that:JQuery = js.Syntax.code("this");
        if(parameter1 == null || (parameter1 != null && parameter2 != null)) {
            createGroup(that, parameter1, parameter2);
        } else if(parameter1 == 'next') {
            instances[that].nextPage();
        } else if(parameter1 == 'previous') {
            instances[that].previousPage();
        } else if(parameter1 != null) {
            instances[that].showPage(parameter1);
        }
        return that;
    }

    public static function createGroup(parent:JQuery, ?showOptions:Dynamic, ?hideOptions:Dynamic):Group {
        var instance = new Group(parent, showOptions, hideOptions);
        instances[parent] = instance;
        return instance;
    }
}
