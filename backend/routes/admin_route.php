<?php
use App\Http\Controllers\Auth\CustomRegisterController;
use Illuminate\Support\Facades\Route;

Route::post('/custom-register', [CustomRegisterController::class, 'register']);

Route::post('/custom-login', [CustomRegisterController::class, 'login']);
