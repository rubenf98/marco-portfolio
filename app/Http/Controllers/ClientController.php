<?php

namespace App\Http\Controllers;

use App\Client;
use App\Http\Resources\ClientResource;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    //
    public function index()
    {
        return ClientResource::collection(Client::paginate(10));
    }

    public function selector()
    {
        return ClientResource::collection(Client::all());
    }
}
