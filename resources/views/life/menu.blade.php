<div class="life-menu">
    <button id="life-reset" data-toggle="tooltip" title="Reset Game" type="button"><i class="fa fa-refresh" aria-hidden="true"></i></button>
    <select id="life-points" data-bind="value: _startLife" data-icon="glyphicon glyphicon-heart" class="selectpicker">
        @for ($i = 2; $i < 5; $i++)
            <option title="<i class=&quot;fa fa-heart&quot;></i> {{ $i }}0">{{ $i }}0</option>
        @endfor
    </select>
    <select id="life-players" data-bind="value: startPlayers" data-icon="glyphicon glyphicon-users" class="selectpicker">
        @for ($i = 2; $i < 9; $i++)
            <option title="<i class=&quot;fa fa-users&quot;></i> {{ $i }}">{{ $i }}</option>
        @endfor
    </select>
</div>
