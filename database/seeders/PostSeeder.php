<?php

namespace Database\Seeders;

use App\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Post::create([
            'category_id' => 1,
            'item_id' => 1,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 2,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 3,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 2,
            'item_id' => 6,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 1,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 2,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 3,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 2,
            'item_id' => 6,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 1,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 2,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 1,
            'item_id' => 3,
            'date' => '2021-03-04'
        ]);
        Post::create([
            'category_id' => 2,
            'item_id' => 6,
            'date' => '2021-03-04'
        ]);
    }
}
