<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ComisionController;

Route::post('/comisiones', [ComisionController::class, 'calcular']);