import js.Browser;

class UIPages
{
    static function main()
    {
        untyped Browser.window.jQuery.prototype["uiPages"] = uiPages;
    }

    static function uiPages()
    {
        trace("Hello");
    }
}
