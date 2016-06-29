<?php

Route::get('life', 'LifeTrackerController@index');

Route::get('bracket', 'BracketController@index');

Route::get('/home', 'HomeController@index');
