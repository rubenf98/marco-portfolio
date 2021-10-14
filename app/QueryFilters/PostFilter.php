<?php

namespace App\QueryFilters;

use Cerbero\QueryFilters\QueryFilters;
use Carbon\Carbon;

/**
 * Filter records based on query parameters.
 *
 */
class PostFilter extends QueryFilters
{

    public function date($range)
    {
        $from = Carbon::createFromFormat('Y-m-d', $range[0])->startOfDay();
        $to = Carbon::createFromFormat('Y-m-d', $range[1])->endOfDay();

        $this->query->whereBetween('date', [$from, $to]);
    }

    public function client($id)
    {
        $this->query->where('client_id', $id);
    }
    public function item($id)
    {
        $this->query->where('item_id', $id);
    }
    public function category($id)
    {
        $this->query->where('category_id', $id);
    }
}
