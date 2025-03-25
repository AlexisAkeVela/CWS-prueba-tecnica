<?php

use App\Http\Controllers\NotesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/notes', [NotesController::class, 'index']);
Route::get('/notes/{id}', [NotesController::class, 'get']);
Route::post('/notes', [NotesController::class, 'create']);
Route::put('/notes/{id}', [NotesController::class, 'update']);
Route::delete('/notes/{id}', [NotesController::class, 'delete']);
