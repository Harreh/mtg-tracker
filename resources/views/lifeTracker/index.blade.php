@extends('layouts.app')

@section('content')
    <div class="content">
        <div id="player-containers" data-bind="foreach: players">
            @include ('lifeTracker.partials.player', ['player' => 0])
        </div>

        <div class="new-player-container player-container">
            <i class="new-player fa fa-plus-square" aria-hidden="true"></i>
        </div>
    </div>

    <div class="hidden">
        <div id="blank-player">
            @include ('lifeTracker.partials.player', ['player' => 0])
        </div>
    </div>
@endsection
