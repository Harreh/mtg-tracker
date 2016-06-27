$(document).ready(function() {
    function initPlayerButtons() {
        $('.content .player-button-container .btn').click(function() {
            game.changeLife($(this).closest('.player-container'), parseInt($(this).val()));
        });
    }

    function Player(name, life) {
        this.life = life;
        this.name = name;
    }

    var game = {
        'players': [],
        'addPalayer': function (element) {
            var players = element.indexOf();

            // Create the html
            $('#blank-player').clone()
                .removeAttr('id')
                .insertBefore(element);

            // Create the new player
            game.players.push(new Player('Player ' + players, 20));

            // TODO: Create the click handlers for the buttons
        },
        'changeLife': function (element, lifeChange) {
            // Find the player's current life
            var playerLife = element.find('.player-life');

            // Calculate & set their new life
            var newLife = parseInt(playerLife.html()) + lifeChange;
            playerLife.html(newLife);
            game.players[element.index()].life = newLife;
        }
    };

    // Initalise the game with two players
    game.players.push(new Player('Player 1', 20));
    game.players.push(new Player('Player 2', 20));

    initPlayerButtons();

    $('.new-player').click(function () {
        game.addPalayer($(this).closest('.player-container'));

        $('.content .player-button-container .btn').off();
        initPlayerButtons();
    });
});
