<div class="player-container" data-life-mode="life">
    <ul class="player-nav">
        <li class="life-button player-tab tab-active"><i class="fa fa-heart"></i><span>Life</span></li>
        <li class="poison-button player-tab"><i class="ss ss-nph"></i><span>Poison</span></li>
    </ul>
    <div class="player-content">
        <div class="player-name-container">
            <input class="player-name" onkeyup="storeCookie()" data-bind="textInput: $data.name, storeCookie: true" tabindex="1" type="text" spellcheck="false" autocomplete="false">
        </div>
        <div class="player-life text-active" data-bind="text: $data.life"></div>

        <div class="player-poison" data-bind="text: $data.poison"></div>

        <div class="player-button-container">
            <div>
                <button value="1" class="btn btn-success btn-add-life btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>1</button>
                <button value="5" class="btn btn-success btn-add-life btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>5</button>
            </div>
            <div>
                <button value="-1" class="btn btn-default btn-lose-life btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>1</button>
                <button value="-5" class="btn btn-default btn-lose-life btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>5</button>
            </div>
        </div>
    </div>
</div>
