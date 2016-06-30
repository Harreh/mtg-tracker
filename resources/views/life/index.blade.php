@extends('layouts.app')

@include('life.partials.menu')

@section('content')
    <div class="content">
        <div id="player-containers" data-bind="foreach: players">
            @include ('life.partials.player', ['player' => 0])
        </div>

        <div id="new-player-container" class="player-container">
            <i class="new-player fa fa-plus" aria-hidden="true"></i>
        </div>

        <div id="blank-player" class="hidden">
            @include ('life.partials.player', ['player' => 0])
        </div>
    </div>
@endsection
