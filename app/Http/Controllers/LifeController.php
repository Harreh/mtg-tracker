<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class LifeController extends Controller
{

    public function index() {
        return view('life.index');
    }

}
