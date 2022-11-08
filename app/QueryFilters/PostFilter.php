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

    public function search($string)
    {
        $this->query->where(function ($query) use ($string) {
            $query->where('item', 'like', '%' . $string . '%')
                ->orWhereHas('category', function ($query) use ($string) {
                    $query->where('name', 'like', '%' . $string . '%');
                });
            // ->orWhere('dive_time', 'like', '%' . $string . '%')
            // ->orWhere('max_deth', 'like', '%' . $string . '%')
            // ->orWhereHas('user', function ($query) use ($string) {
            //     $query->WhereHas('user_person', function ($query) use ($string) {
            //         $query->where('name', 'like', '%' . $string . '%');
            //     })
            //         ->orWhereHas('user_dive_center', function ($query) use ($string) {
            //             $query->where('name', 'like', '%' . $string . '%');
            //         });
            // })
            // ->orWhereHas('diving_spot', function ($query) use ($string) {
            //     $query->where('name', 'like', '%' . $string . '%');
            // });
        });
    }

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
    public function item($string)
    {
        $this->query->where('item', 'like', '%' . $string . '%');
    }
    public function category($id)
    {
        $this->query->where('category_id', $id);
    }
}
