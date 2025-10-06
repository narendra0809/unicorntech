<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Portfolio_catregory extends Model
{
    protected $fillable = ['name', 'slug'];

    public function portfolios(): HasMany
    {
        return $this->hasMany(Portfolio::class, 'portfolio_catregory_id');
    }
}
