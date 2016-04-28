<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class LifeTrackerController extends Controller
{

    public function index() {
        return view('lifeTracker.index');
    }

}
