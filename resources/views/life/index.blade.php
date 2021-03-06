@extends('layouts.app')

@section('menu')
    @include('life.menu')
@endsection

@section('content')
    <div class="content">
        <div id="player-containers" data-bind="foreach: players, storeCookieForeach: true">
            @include ('life.partials.player')
        </div>

        <div id="new-player-container" class="player-container">
            <i class="new-player fa fa-plus" aria-hidden="true"></i>
        </div>

        <div id="blank-player" class="hidden">
            @include ('life.partials.player')
        </div>
    </div>
@endsection
