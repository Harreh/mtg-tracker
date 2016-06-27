<div class="player-container" data-life-mode="life">

    <div class="container">
        <div>
            <span class="player-name" data-bind="text: $data.name"></span>
            <input type="text" class="player-name hidden" data-bind="value: $data.name">
        </div>
    </div>
    <div class="container">
        <div class="player-life" data-bind="text: $data.life"></div>
        <div class="player-poison hidden" data-bind="text: $data.poison"></div>
    </div>
    <div class="player-button-container">
        <div class="container">
            <i class="poison-button ss ss-nph"></i>
        </div>
        <div class="container">
            <button value="1" class="btn btn-add-life btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>1</button>
            <button value="5" class="btn btn-add-life btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>5</button>
        </div>
        <div class="container">
            <button value="-1" class="btn btn-lose-life btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>1</button>
            <button value="-5" class="btn btn-lose-life btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>5</button>
        </div>
    </div>
</div>
