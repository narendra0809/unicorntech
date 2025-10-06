<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portfolio extends Model
{
    protected $fillable = [
        'portfolio_catregory_id',
        'name',
        'slug',
        'image',
        'description'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Portfolio_catregory::class, 'portfolio_catregory_id');
    }

    public function casestudies(): HasMany
    {
        return $this->hasMany(Casestudy::class, 'portfolio_id');
    }
}
