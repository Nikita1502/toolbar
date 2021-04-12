define([
    "dojo/_base/declare",
    "dojo",
    "dojo/dom",
    "js/toolbar.js"
], function(declare, dojo, dom, toolbar) {

    return declare("extButton", null, {
        name: undefined,
        status: undefined,

        constructor: function() {
            // parentNode = dom.byId('toolbar');
            // buttons = toolbar.buttons;
            // // buttons = toolbar.getButtons();
            // console.log(buttons);

            // var button = dojo.create("button", null, parentNode);
        },

        startup: function() {
        }
        
    });
});
