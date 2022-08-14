<?php

use App\Http\Controllers\UserManagementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\LoanController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



//Route::group(['middleware'=>['AuthCheck']], function(){

// STORE

Route::post('/store', [UserManagementController::class, 'store']); // store USER
Route::post('/storeLoan', [LoanController::class, 'storeLoan']); // store LOAN
Route::post('/storeCompany', [CompanyController::class, 'storeCompany']); // store LOAN

Route::get('/getLoan', [LoanController::class, 'getLoan']);
Route::get('/getUser', [UserManagementController::class, 'getUser']);
Route::get('/getCompany', [CompanyController::class, 'getCompany']);


//});

// ROUTES

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);


//Auth::routes();

/*
Route::post('/orders', function () {
    // Token has both "check-status" and "place-orders" abilities...
})->middleware(['auth:sanctum', 'abilities:check-status,place-orders']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});