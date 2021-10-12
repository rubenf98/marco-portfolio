<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'App\Http\Controllers\AuthController@login');
Route::post('logout', 'AuthController@logout');
Route::post('refresh', 'AuthController@refresh');
Route::post('me', 'AuthController@me');

Route::get('selector/item', 'App\Http\Controllers\ItemController@selector');
Route::get('selector/category', 'App\Http\Controllers\CategoryController@selector');
Route::get('selector/client', 'App\Http\Controllers\ClientController@selector');

Route::apiResource('category', 'App\Http\Controllers\CategoryController');
Route::apiResource('post', 'App\Http\Controllers\PostController');
Route::apiResource('message', 'App\Http\Controllers\MessageController');
Route::apiResource('item', 'App\Http\Controllers\ItemController');
Route::apiResource('client', 'App\Http\Controllers\ClientController');
