<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Casestudy extends Model
{
    protected $fillable = [
        'portfolio_id',
        'meta_title',
        'meta_description',
        'title',
        'description',
        'images',
        'platform',
        'services',
        'industry',
        'timeline',
        'techstack',
        'project_overview',
        'challenges',
        'solution',
        'about',
    ];

    protected $casts = [
        'images' => 'array',
        'techstack' => 'array',
    ];

    public function portfolio(): BelongsTo
    {
        return $this->belongsTo(Portfolio::class);
    }
}
