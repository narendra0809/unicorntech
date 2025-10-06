<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clientreview extends Model
{
    protected $fillable = ['client_name', 'msg', 'from', 'image'];
}
