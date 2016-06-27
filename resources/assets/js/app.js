function Player(life, name) {
    this.life = ko.observable(life);
    this.name = ko.observable(name);
}

var Game = {
    'players': ko.observableArray(),
    'addPalayer': function (name) {
        Game.players.push(new Player(20, name));
    },
    'changeLife': function (index, lifeChange) {
        Game.players()[index].life(Game.players()[index].life() + lifeChange);
    }
};

function initPlayerButtons() {
    $('.content .player-button-container .btn').click(function() {
        Game.changeLife($(this).closest('.player-container').index(), parseInt($(this).val()));
    });
}

$(document).ready(function() {
    ko.applyBindings(Game);

    // Initalise the Game with two players
    Game.players.push(new Player(20, 'Player 1'));
    Game.players.push(new Player(20, 'Player 2'));

    initPlayerButtons();

    $('.new-player').click(function () {
        var players = parseInt(Game.players().length) + 1;
        Game.addPalayer('Player ' + players);

        $('.content .player-button-container .btn').off();
        initPlayerButtons();
    });
});
