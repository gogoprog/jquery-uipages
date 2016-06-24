var container;

$(function() {
    container = $("#pages").uiPages(
        {
            effect:"scale"
        },
        {
            effect:"scale"
        }
    );

    container.uiPages(0);
});
