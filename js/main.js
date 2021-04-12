define([
    "dojo/_base/declare",
    "dojo",
    "js/toolbar.js",
    "js/statusbar.js",
    "js/button.js"
], function(declare, dojo, toolbar, statusbar) {

    return declare("extManager", null, {

        constructor: function() {
            var parentNode = dojo.create("div", null, dojo.body(), "first");
            dojo.setAttr(parentNode, 'id', 'windowManager');
        },

        createToolbar: function() {
            tb = new toolbar();

            for (let i = 0; i< tb.btns.length; i++){
                tb.btns[i].addEventListener('click', function(){
                    console.log(this.innerHTML);
                    sb.pressedBtn = this.innerHTML;
                    sb.statusOutput();
                })
            }
        },

        createStatusbar: function() {
            sb = new statusbar();
            sb.state = this.pressedBtn;
        },

    });
});

