<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Intervention\Image\Facades\Image as IMG;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;
    protected $fillable = ['url', 'cover', 'post_id'];

    public static function storeImage($photo, $filename)
    {
        IMG::make($photo)->encode('jpg', 70)->resize(760, null, function ($c) {
            $c->aspectRatio();
            $c->upsize();
        })->save(public_path('images/posts/' . $filename));
    }

    public function post()
    {
        return $this->belongsTo('App\Post');
    }
}
