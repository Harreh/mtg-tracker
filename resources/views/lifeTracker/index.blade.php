@extends('layouts.app')

@section('content')
    <div class="content">
        <div id="player-containers" data-bind="foreach: players">
            @include ('lifeTracker.partials.player', ['player' => 0])
        </div>

        <div id="new-player-container" class="player-container">
            <i class="new-player fa fa-plus-square" aria-hidden="true"></i>
        </div>

        <div id="blank-player" class="hidden">
            @include ('lifeTracker.partials.player', ['player' => 0])
        </div>
    </div>
@endsection
