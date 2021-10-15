<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;

/**
 * Filter records based on query parameters.
 *
 */
class CategoryFilter extends QueryFilters
{
    //

    public function name($string)
    {
        $this->query->where('name', 'like', '%' . $string . '%');
    }

    public function item($string)
    {
        $this->query->whereHas('items', function ($query) use ($string) {
            $query->where('name', 'like', '%' . $string . '%');
        });
    }
}
