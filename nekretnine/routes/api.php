<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\NekretninaController;
use App\Http\Controllers\KupovinaController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::resource('agents', AgentController::class);

Route::get('nekretnine', [NekretninaController::class, 'index']);

Route::get('nekretnine/{id}', [NekretninaController::class, 'show']);

Route::get('kupovine', [KupovinaController::class, 'index']);

Route::get('kupovine/{id}', [KupovinaController::class, 'show']);

Route::get('/search/nekretnine', [SearchController::class, 'searchNekretnine']);

//login i registracija
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('grafik', [KupovinaController::class, 'groupNumberOfKupovinaPerAgent']);


//rute za koje je potrebna autentifikacija
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('nekretnine', [NekretninaController::class, 'store']);

    Route::put('nekretnine/{id}', [NekretninaController::class, 'update']);

    Route::delete('nekretnine/{id}', [NekretninaController::class, 'destroy']);

    Route::patch('nekretnine/{id}', [NekretninaController::class, 'updateCena']);

    Route::post('logout', [AuthController::class, 'logout']);

    Route::post('kupovine', [KupovinaController::class, 'store']);

    Route::get('kupovineNaCekanju', [KupovinaController::class, 'kupovineNaCekanju']);

    Route::put('odobri/{id}', [KupovinaController::class, 'odobri']);

    Route::put('odbij/{id}', [KupovinaController::class, 'odbij']);
});



