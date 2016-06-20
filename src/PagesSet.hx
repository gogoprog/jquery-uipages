import js.JQuery;

class PagesSet
{
    private var parent:JQuery;
    private var currentPage:JQuery;
    private var currentPageId:String;
    private var currentPageIndex:Int = 0;

    public function new(parent_:JQuery)
    {
        parent = parent_;
    }

    public function showPage(selector:Dynamic)
    {
        var page:JQuery;

        if(Std.is(selector, Int))
        {
            page = new JQuery(parent.children()[selector]);
        }
        else if(Std.is(selector, String))
        {
            page = parent.find(selector);
        }
        else
        {
            page = selector;
        }

        parent.children().each(function(){
            var that:JQuery = new JQuery(untyped __js__("this"));

            if(that[0] != page[0])
            {
                that.hide();
            }
            else
            {
                that.show();
                this.currentPage = that;
                this.currentPageId = that.attr("id");
                this.currentPageIndex = that.index();
            }
        });
    }

    public function nextPage()
    {
        var index = currentPageIndex + 1;
        var len = parent.children().length;

        if(index >= len)
        {
            index -= len;
        }

        showPage(index);
    }

    public function previousPage()
    {
        var index = currentPageIndex - 1;

        if(index < 0)
        {
            index += parent.children().length;
        }

        showPage(index);
    }
}
