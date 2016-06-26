<div class="player-container">
    <div class="container">
        <div class="player-name col-md-3">{{ $name }}</div>
    </div>
    <div class="container">
        <div class="player-life col-md-2">20</div>
    </div>
    <div class="player-button-container container">
        {{ Form::button('+1', ['class' => 'btn btn-success btn-xl']) }}
        {{ Form::button('+5', ['class' => 'btn btn-success btn-xl']) }}
    </div>
    <div class="player-button-container container">
        {{ Form::button('-1', ['class' => 'btn btn-danger btn-xl']) }}
        {{ Form::button('-5', ['class' => 'btn btn-danger btn-xl']) }}
    </div>
</div>
