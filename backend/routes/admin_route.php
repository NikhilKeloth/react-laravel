<?php
use App\Http\Controllers\Auth\CustomRegisterController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\ApiAuthenticate;



Route::post('/custom-register', [CustomRegisterController::class, 'register']);

Route::middleware('api-authenticate')->group(function () {
     // Add other protected routes here
Route::post('/custom-login', [CustomRegisterController::class, 'login']);   
});


