<div class="player-container">

    <div class="container">
        <div>
            <span class="player-name" data-bind="text: $data.name"></span>
            <input type="text" class="player-name hidden" data-bind="value: $data.name">
        </div>
    </div>
    <div class="container">
        <div class="player-life" data-bind="text: $data.life"></div>
    </div>
    <div class="player-button-container">
        <div class="container">
            <button value="1" class="btn btn-success btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>1</button>
            <button value="5" class="btn btn-success btn-xl"><i class="fa fa-plus" aria-hidden="true"></i>5</button>
        </div>
        <div class="container">
            <button value="-1" class="btn btn-danger btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>1</button>
            <button value="-5" class="btn btn-danger btn-xl"><i class="fa fa-minus" aria-hidden="true"></i>5</button>
        </div>
    </div>
</div>
