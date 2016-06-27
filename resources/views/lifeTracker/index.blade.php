@extends('layouts.app')

@section('content')
    <div class="content">
        @include ('lifeTracker.partials.player', ['name' => 'Player 1'])
        @include ('lifeTracker.partials.player', ['name' => 'Player 2'])

        <div class="new-player-container player-container">
            <i class="new-player fa fa-plus-square" aria-hidden="true"></i>
        </div>
    </div>

    <div class="hidden">
        <div id="blank-player">
            @include ('lifeTracker.partials.player', ['name' => 'Player 3'])
        </div>
    </div>
@endsection
