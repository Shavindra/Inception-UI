;
(function (window, document, _, core) {

    var options = {
        url: 'http://beta.json-generator.com/api/json/get/41l35j_5g'
    };

    var getNavLinksRequest = core.Utils.Data.get(options);

    getNavLinksRequest.done(function (data) {
        var links = data,
            html = '<ul class="lvl_1">';

        for (var i = 0; i < links.length; i++) {

            var title = links[i].title,
                url = title.replace(' ', '-');

            html += '<li class="item-lvl_1"><a href="#' + url + '"> ' + title + '</a>';

            //sub links
            if (links[i].children.length > 0) {

                var subLinks = links[i].children;

                html += '<ul class="lvl_2">';

                for (var j = 0; j < subLinks.length; j++) {
                    var subLinkTitle = subLinks[j].title,
                        subLinkUrl = subLinkTitle.replace(' ', '-');

                    html += '<li class="item-lvl_2"><a href="#' + subLinkUrl + '"> ' + subLinkTitle + '</a>';
                }

                html += '</ul>';
            }

            html += '</li>';
        }

        html += '</ul>';


        $('.widget-parent').append(html);
    });



})(window, document, _, CORE)