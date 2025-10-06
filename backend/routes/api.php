<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\PortfolioCategoryController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\CaseStudyController;
use App\Http\Controllers\Api\OurTeamController;
use App\Http\Controllers\Api\ClientReviewController;

Route::post('/admin/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function(){
 Route::get('/contacts', [ContactController::class, 'index']);
Route::apiResource('portfolio-categories', PortfolioCategoryController::class);
Route::apiResource('portfolios', PortfolioController::class);
Route::apiResource('casestudies', CaseStudyController::class);
Route::apiResource('ourteam', OurTeamController::class);
Route::apiResource('clientreviews', ClientReviewController::class);
Route::post('/admin/logout', [\App\Http\Controllers\AuthController::class, 'logout']);

});
Route::get('/portfolio-categories', [PortfolioCategoryController::class, 'index']);
Route::get('/portfolios', [PortfolioController::class, 'index']);
Route::get('/portfolios/{id}', [PortfolioController::class, 'show']);
Route::get('/casestudies', [CaseStudyController::class, 'index']);
Route::get('/casestudies/{id}', [CaseStudyController::class, 'show']);
Route::get('/ourteam', [OurTeamController::class, 'index']);
Route::get('/clientreviews', [ClientReviewController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);

