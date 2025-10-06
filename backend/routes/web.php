<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Response;

Route::get('/storage/{folder}/{filename}', function($folder, $filename) {
    $path = storage_path("app/public/{$folder}/{$filename}");

    if (!file_exists($path)) {
        abort(404);
    }

    $mime = mime_content_type($path);
    return response()->file($path, [
        'Content-Type' => $mime,
        // cache headers optional:
        'Cache-Control' => 'public, max-age=31536000',
    ]);
})->where('filename', '.*');
