<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    public function category()
    {
        return $this->belongsTo('App\Category');
    }

    public function item()
    {
        return $this->belongsTo('App\Item');
    }

    public function client()
    {
        return $this->belongsTo('App\Client');
    }

    public function images()
    {
        return $this->hasMany('App\Image');
    }
}
