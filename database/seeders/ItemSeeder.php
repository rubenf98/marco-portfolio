<?php

namespace Database\Seeders;

use App\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Item::create([
            'name' => 'blackout',
            'category_id' => 1
        ]);
        Item::create([
            'name' => 'persianas',
            'category_id' => 1
        ]);
        Item::create([
            'name' => 'duofold',
            'category_id' => 1
        ]);
        Item::create([
            'name' => 'd',
            'category_id' => 2
        ]);
        Item::create([
            'name' => 'e',
            'category_id' => 2
        ]);
        Item::create([
            'name' => 'f',
            'category_id' => 2
        ]);
        Item::create([
            'name' => 'g',
            'category_id' => 3
        ]);
        Item::create([
            'name' => 'h',
            'category_id' => 3
        ]);
        Item::create([
            'name' => 'i',
            'category_id' => 4
        ]);
        Item::create([
            'name' => 'j',
            'category_id' => 4
        ]);
    }
}
