@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="col-md-6">
            <div class="container">
                <div class="col-md-3">
                    {{ Form::text('player1Name', 'Player 1') }}
                </div>
                <div class="col-md-2">
                    {{ Form::text('player1Life', 20) }}
                </div>
            </div>
            <div class="container">
                {{ Form::button('+1', ['class' => 'btn btn-primary btn-lg']) }}
                {{ Form::button('+5', ['class' => 'btn btn-primary btn-lg']) }}
            </div>
            <div class="container">
                {{ Form::button('-1', ['class' => 'btn btn-primary btn-lg']) }}
                {{ Form::button('-5', ['class' => 'btn btn-primary btn-lg']) }}
            </div>
        </div>
        <div class="col-md-6">
            <div class="container">
                <div class="col-md-3">
                    Player 1
                </div>
                <div class="col-md-2">
                    <h1>20</h1>
                </div>
            </div>
            <div class="container">
                <button class="btn btn-primary btn-lg">+1</button>
                <button class="btn btn-primary btn-lg">+5</button>
            </div>
            <div class="container">
                <button class="btn btn-primary btn-lg">-1</button>
                <button class="btn btn-primary btn-lg">-5</button>
            </div>
        </div>
    </div>
@endsection
