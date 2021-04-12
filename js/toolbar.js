define([
    "dojo/_base/declare",
    "dojo",
    "dojo/dom", 
    "js/button.js",
    "js/statusbar.js",
    "js/main.js"
], function(declare, dojo, dom, button, statusbar, main) {

    return declare("extToolbar", null, {
        buttons: ["Cut", "Copy", "Paste"],
        btns: [],


        constructor: function() {
            parentNode = dom.byId('windowManager');            
            var toolbar = dojo.create("div", null, parentNode);
            dojo.setAttr(toolbar, 'class', 'toolbar');

            this.buttons.forEach(element => {
                var button = dojo.create("button", {innerHTML: element}, toolbar);
                dojo.setAttr(button, 'class', 'btn');
                // button.setAttribute('disabled', true);
                this.btns.push(button);
            })
        },

    });
});
