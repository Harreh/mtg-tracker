function Player(life, name) {
    this.life = ko.observable(life);
    this.poison = ko.observable(0);
    this.name = ko.observable(name);
}

var Game = {
    'players': ko.observableArray(),
    'addPalayer': function (name) {
        Game.players.push(new Player(20, name));
    },
    'changeLife': function (index, lifeChange) {
        Game.players()[index].life(Game.players()[index].life() + lifeChange);
    },
    'changePoison': function(index, poisonChange) {
        Game.players()[index].poison(Game.players()[index].poison() + poisonChange);
    }
};

function initPlayerButtons() {
    $('.poison-button').click(function () {
        var element = $(this).closest('.player-container');

        if (element.attr('data-life-mode') == 'life') {
            element.attr('data-life-mode', 'poison');

            element.find('.player-life').addClass('hidden');
            element.find('.player-poison').removeClass('hidden');
        } else {
            element.attr('data-life-mode', 'life');

            element.find('.player-life').removeClass('hidden');
            element.find('.player-poison').addClass('hidden');
        }
    });

    $('.content .player-button-container .btn').click(function() {
        var playerContainer = $(this).closest('.player-container');
        var index = playerContainer.index();
        var value = parseInt($(this).val());

        if (playerContainer.attr('data-life-mode') == 'life') {
            Game.changeLife(index, value);
        } else {
            Game.changePoison(index, value);
        }
    });
}

$(document).ready(function() {
    ko.applyBindings(Game);

    $('#new-player-container').appendTo($('#player-containers'));

    // Initalise the Game with two players
    Game.addPalayer('Player 1');
    Game.addPalayer('Player 2');

    initPlayerButtons();

    $('.new-player').click(function () {
        var players = parseInt(Game.players().length) + 1;
        Game.addPalayer('Player ' + players);

        $('.content .player-button-container .btn').off();
        initPlayerButtons();
    });
});
