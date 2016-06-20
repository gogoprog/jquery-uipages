import js.JQuery;

class PagesSet
{
    private var parent:JQuery;
    private var currentPage:JQuery;
    private var currentPageId:String;

    public function new(parent_:JQuery)
    {
        parent = parent_;
    }

    public function showPage(selector:String)
    {
        var page = parent.find(selector);

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
            }
        });
    }
}
