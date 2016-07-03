function Player(life, name) {
    this.life = ko.observable(life);
    this.poison = ko.observable(0);
    this.name = ko.observable(name);
}

var Game = {
    'globalMode': false,
    '_startLife': 20,
    'startLife': function() {
        return parseInt(this._startLife);
    },
    'startPlayers': ko.observable(2),
    'players': ko.observableArray(),
    'addPlayer': function(life, name) {
        this.players.push(new Player(life, name));
    },
    'addLife': function(index, lifeChange) {
        var self = this;

        if (this.globalMode) {
            this.players().forEach(function(element, index) {
               self.players()[index].life(self.players()[index].life() + lifeChange);
            });
        } else {
            this.players()[index].life(this.players()[index].life() + lifeChange);
        }
    },
    'addPoison': function(index, poisonChange) {
        var self = this;

        if (this.globalMode) {
            this.players().forEach(function(element, index) {
                self.players()[index].poison(self.players()[index].poison() + poisonChange);
            });

        } else {
            this.players()[index].poison(this.players()[index].poison() + poisonChange);
        }
    },
    'reset': function() {
        this.players([]);
        for (var i = 0; i < this.startPlayers(); i++) {
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
        var value = parseInt($(this).val());
        var lifeMode = playerContainer.attr('data-life-mode') == 'life';

        if (lifeMode) {
            Game.addLife(playerContainer.index(), value);
        } else {
            Game.addPoison(playerContainer.index(), value);
        }
    });
}

function initMenuButtons() {
    $('#life-reset').click(function() {
        $('[data-toggle="tooltip"]').tooltip('hide');

        bootbox.confirm({
            'closeButton': false,
            'size': 'small',
            'title': 'Reset game?',
            'message': 'Do you want to start a new game with ' + Game.startPlayers() + ' players on ' + Game.startLife() + ' life?',
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
    $(document).keydown(function(e) {
        if (e.keyCode == 17) {
            Game.globalMode = true;
            $('.player-button-container').addClass('hover');
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 17) {
            Game.globalMode = false;
            $('.player-button-container').removeClass('hover');
        }
    });

    $('.selectpicker').selectpicker({
        width: '100px',
        iconBase: 'fa'
    }).on('show.bs.select', function() {
        $('[data-toggle="tooltip"]').tooltip('hide').tooltip('disable');
    }).on('hide.bs.select', function() {
        $('[data-toggle="tooltip"]').tooltip('enable');
    });

    $('.bootstrap-select').attr('data-toggle', 'tooltip');

    $('.bootstrap-select [data-id="life-points"]').parent().attr('title', 'Life Points');
    $('.bootstrap-select [data-id="life-players"]').parent().attr('title', 'Start Players');

    var tooltips = $('[data-toggle="tooltip"]');

    tooltips.tooltip({
        placement: 'bottom',
        container: 'body',
        delay: 650
    });

    tooltips.mouseover(function() {
        tooltips.not(this).tooltip('hide');
    });

    Game.reset();

    ko.applyBindings(Game);

    $('#new-player-container').appendTo($('#player-containers'));

    initMenuButtons();
    initPlayerButtons();

    $('.new-player').click(function() {
        var players = parseInt(Game.players().length) + 1;
        Game.addPlayer(20, 'Player ' + players);
        Game.startPlayers(players);

        $('.selectpicker').selectpicker('refresh');
        $('.dropdown-toggle').removeAttr('title');

        $('.poison-button, .life-button').off();

        $('.player-button-container .btn').off();
        initPlayerButtons();
    });

    $('.dropdown-toggle').removeAttr('title');
});
