package js;

import js.Browser;
import js.JQuery;

class UIPages
{
    static function main()
    {
        untyped Browser.window.jQuery.prototype["uiPages"] = uiPages;
    }

    static var instances = new Map<JQuery, PagesSet>();

    static function uiPages(?parameter1, ?parameter2)
    {
        var that:JQuery = untyped __js__("this");

        if(parameter1 == null || (parameter1 != null && parameter2 != null))
        {
            createSet(that, parameter1, parameter2);
        }
        else if(parameter1 == 'next')
        {
            instances[that].nextPage();
        }
        else if(parameter1 == 'previous')
        {
            instances[that].previousPage();
        }
        else if(parameter1 != null)
        {
            instances[that].showPage(parameter1);
        }

        return that;
    }

    public static function createSet(parent:JQuery, ?showOptions, ?hideOptions)
    {
        var instance = new PagesSet(parent, showOptions, hideOptions);
        instances[parent] = instance;
        return instance;
    }
}
