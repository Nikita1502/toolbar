define([
    "dojo/_base/declare",
    "dojo",
    "dojo/dom",
    "js/main.js"
], function(declare, dojo, dom, main) {

    return declare("extStatusbar", null, {

        constructor: function() {
            parentNode = dom.byId('windowManager');
            var statusbar = dojo.create("div", null, parentNode);
            dojo.setAttr(statusbar, 'class', 'statusbar');

        },

        statusOutput: function(){
            const statusbar = document.querySelector('.statusbar')
            statusbar.innerHTML = this.pressedBtn;
        }
        
    });
});
