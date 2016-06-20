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

        if(parameter1 == null && parameter2 == null)
        {
            createSet(that);
        }
        else if(Type.getClass(parameter1) == String)
        {
            instances[that].showPage(parameter1);
        }

        return that;
    }

    public static function createSet(parent:JQuery)
    {
        var instance = new PagesSet(parent);
        instances[parent] = instance;
        return instance;
    }
}
