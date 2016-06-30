function Player(life, name) {
    this.life = ko.observable(life);
    this.poison = ko.observable(0);
    this.name = ko.observable(name);
}

var Game = {
    '_startLife': 20,
    'startLife': function() {
        return parseInt(this._startLife);
    },
    'startPlayers': 2,
    'players': ko.observableArray(),
    'addPlayer': function (life, name) {
        this.players.push(new Player(life, name));
    },
    'addLife': function(index, lifeChange) {
        this.players()[index].life(this.players()[index].life() + lifeChange);
    },
    'addPoison': function(index, poisonChange) {
        this.players()[index].poison(this.players()[index].poison() + poisonChange);
    },
    'reset': function() {
        this.players([]);
        console.log(this.startLife());
        for (var i = 0; i < this.startPlayers; i++) {
            this.addPlayer(this.startLife(), 'Player ' + (i + 1));
        }
    }
};

function initPlayerButtons() {
    $('.poison-button, .life-button').click(function() {
        var element = $(this).closest('.player-container');

        if (!$(this).hasClass('tab-active')) {
            element.find('.player-tab').removeClass('tab-active');
            $(this).addClass('tab-active');
        }

        if ($(this).hasClass('life-button')) {
            element.attr('data-life-mode', 'life');
            element.find('.player-life').addClass('text-active');
            element.find('.player-poison').removeClass('text-active');
        }

        if ($(this).hasClass('poison-button')) {
            element.attr('data-life-mode', 'poison');
            element.find('.player-poison').addClass('text-active');
            element.find('.player-life').removeClass('text-active');
        }
    });

    $('.content .player-button-container .btn').click(function() {
        var playerContainer = $(this).closest('.player-container');
        var index = playerContainer.index();
        var value = parseInt($(this).val());

        if (playerContainer.attr('data-life-mode') == 'life') {
            Game.addLife(index, value);
        } else {
            Game.addPoison(index, value);
        }
    });
}

function initMenuButtons() {
    $('#life-reset').click(function() {
        bootbox.confirm({
            'closeButton': false,
            'size': 'small',
            'title': 'Reset game?',
            'message': 'Do you want to start a new game with ' + Game.startPlayers + ' players on ' + Game.startLife() + ' life?',
            'callback': function(result) {
                if (result) {
                    Game.reset();
                    initPlayerButtons();
                }
            }
        });
    });
}

$(document).ready(function() {
    $('.selectpicker').selectpicker();

    Game.reset();

    ko.applyBindings(Game);

    $('#new-player-container').appendTo($('#player-containers'));

    initMenuButtons();
    initPlayerButtons();

    $('.new-player').click(function () {
        var players = parseInt(Game.players().length) + 1;
        Game.addPlayer(20, 'Player ' + players);

        $('.poison-button, .life-button').off();
        $('.content .player-button-container .btn').off();
        initPlayerButtons();
    });
});
