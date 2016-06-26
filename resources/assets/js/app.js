$(document).ready(function() {
    $('.new-player').click(function () {
        $('#blank-player').clone()
            .removeAttr('id')
            .insertBefore($(this).closest('.player-container'));
    });
});
