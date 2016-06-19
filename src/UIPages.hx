import js.Browser;
import js.JQuery;

class UIPages
{
    static function main()
    {
        untyped Browser.window.jQuery.prototype["uiPages"] = uiPages;
    }

    static var instances = new Map<String, PagesSet>();

    static function uiPages(?parameters)
    {
        var that:JQuery = untyped __js__("this");

        if(Type.getClass(parameters) == String)
        {
            createSet(parameters, that);
        }
    }

    public static function createSet(name, parent)
    {
        trace("Creating set : " + name);

        
    }
}
