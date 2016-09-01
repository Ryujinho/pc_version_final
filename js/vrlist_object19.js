(function () {
    'use strict';

    var win = window; // eslint-disable-line no-undef
    var jq = win.jQuery;
    var appendContent = true;
    var vrlist = [ '','로비','라운지','스마트클래스'];
    
    function generateContent() {
        jq('.scrollpanel').each(function (idx, el) {
            for (var i = 1; i < vrlist.length; i += 1) {
                jq(el).append('<div class="item">'
                                +'<a target="demo" href="vr19_'
                                +i+'.html">'
                                +vrlist[i]
                                +'</a>'
                                +'</div>');
                                if(i == vrlist.length-1)
                                    jq(el).append('<div class="item">'+'<a href=\'index.html\' return false;\'>지도로 돌아가기</a>'+'</div>')
            }
        });
        
    }

    function init() {
        generateContent();
        jq('.scrollpanel').scrollpanel();
    }
    jq(init);
}());
