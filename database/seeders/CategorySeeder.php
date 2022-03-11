<?php

namespace Database\Seeders;

use App\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'name' => 'sofas'
        ]);
        Category::create([
            'name' => 'cortinados'
        ]);
        Category::create([
            'name' => 'cadeiras'
        ]);
        Category::create([
            'name' => 'outros'
        ]);
    }
}
