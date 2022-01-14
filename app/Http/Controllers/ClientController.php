<?php

namespace App\Http\Controllers;

use App\Client;
use App\Http\Resources\ClientResource;
use App\QueryFilters\ClientFilter;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    //
    public function index()
    {
        return ClientResource::collection(Client::paginate(10));
    }

    public function selector(ClientFilter $filters)
    {
        return ClientResource::collection(Client::filterBy($filters)->get());
    }
}
