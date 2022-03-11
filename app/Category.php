<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    use FiltersRecords;

    public function posts()
    {
        return $this->hasMany('App\Post');
    }
}
