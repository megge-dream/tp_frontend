define([
    'backbone',
    'tmpl/scoreboard',
    'collections/scores',
    'models/score',
], function(
    Backbone,
    tmplScore,
    Scoreboard,
    Player
){

    var players = [
    {name: "pasha", score: 888},
    {name: "masha", score: 898},
    {name: "sasha", score: 989},
    {name: "tanya", score: 777},
    {name: "jany", score: 1313},
    {name: "ilya", score: 4242},
    {name: "igor", score: 1212},
    {name: "lesha", score: 333},
    {name: "tolya", score: 666},
    {name: "anis", score: 543},
    ];
    var ScoreboardView = Backbone.View.extend({
        el: "#page",
        template: tmplScore,
        scoreboard: Scoreboard,
        initialize: function () {
            for (var i = 0; i < players.length; i++) {
                var player =new Player(players[i]);
                this.scoreboard.add(player);
            };
;
        },
        render: function () {
        },
        show: function () {
            console.log(this.scoreboard);
            this.$el.html(this.template({scoreboard: this.scoreboard.models}));
        },
        hide: function () {
            // TODO
        }
    });
    return new ScoreboardView();

});