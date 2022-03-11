<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use App\Image;

class Post extends Model
{
    use HasFactory;
    use FiltersRecords;

    protected $fillable = ['category_id', 'client_id', 'date', 'item'];

    public function savePhoto($file, $cover = false)
    {
        $filename = uniqid() . '.webp';

        Image::create([
            'post_id' => $this->id,
            'url' => '/posts/' . $filename,
            'cover' => $cover,
        ]);

        Image::storeImage($file, $filename);
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
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
