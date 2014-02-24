define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl,
    game
){
 
    var View = Backbone.View.extend({
        
        el: $("#page"),
        template: tmpl,
        initialize: function () {
             
        },
        render: function () {
            // TODO
        },
        show: function () {
            this.$el.html(this.template);
        },
        hide: function () {
            // TODO
        }
 
    });
 
    return new View();
});