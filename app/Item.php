<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public function posts()
    {
        return $this->hasMany('App\Post');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }
}
