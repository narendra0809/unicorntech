<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CasestudyImage extends Model
{
    protected $table = 'casestudy_images';

    protected $fillable = ['casestudy_id', 'image', 'alt'];

    public function casestudy(): BelongsTo
    {
        return $this->belongsTo(Casestudy::class, 'casestudy_id');
    }
}
