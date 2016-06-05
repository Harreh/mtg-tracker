<?php

Route::get('life', 'LifeTrackerController@index');

Route::get('bracket', 'BracketController@index');

Route::auth();

Route::get('/home', 'HomeController@index');
