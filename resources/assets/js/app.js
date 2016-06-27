function Player(life, name) {
    this.life = ko.observable(life);
    this.name = ko.observable(name);
}

var game = {
    'players': ko.observableArray([]),
    'addPalayer': function (index) {
        // Create the new player
        game.players.push(new Player(20, 'Player ' + index));
    },
    'changeLife': function (index, lifeChange) {
        game.players()[index].life(game.players()[index].life() + lifeChange);
    }
};

function initPlayerButtons() {
    $('.content .player-button-container .btn').click(function() {
        game.changeLife($(this).closest('.player-container').index(), parseInt($(this).val()));
    });
}

$(document).ready(function() {
    ko.applyBindings(game);

    // Initalise the game with two players
    game.players.push(new Player(20, 'Player 1'));
    game.players.push(new Player(20, 'Player 2'));

    initPlayerButtons();

    $('.new-player').click(function () {
        game.addPalayer($(this).closest('.player-container').index());

        $('.content .player-button-container .btn').off();
        initPlayerButtons();
    });
});
