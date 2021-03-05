<?php

namespace Database\Seeders;

use App\Image;
use Illuminate\Database\Seeder;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 1
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 1
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 1
        ]);
        Image::create([
            'cover' => true,
            'url' => '2.jpg',
            'post_id' => 2
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 2
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 2
        ]);
        Image::create([
            'cover' => true,
            'url' => '3.webp',
            'post_id' => 3
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 3
        ]);
        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 4
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 4
        ]);




        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 5
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 5
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 5
        ]);
        Image::create([
            'cover' => true,
            'url' => '2.jpg',
            'post_id' => 6
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 6
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 6
        ]);
        Image::create([
            'cover' => true,
            'url' => '3.webp',
            'post_id' => 7
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 7
        ]);
        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 8
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 8
        ]);

        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 9
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 9
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 9
        ]);
        Image::create([
            'cover' => true,
            'url' => '2.jpg',
            'post_id' => 10
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 10
        ]);
        Image::create([
            'url' => '4.jpg',
            'post_id' => 10
        ]);
        Image::create([
            'cover' => true,
            'url' => '3.webp',
            'post_id' => 11
        ]);
        Image::create([
            'url' => '1.jpg',
            'post_id' => 11
        ]);
        Image::create([
            'cover' => true,
            'url' => '1.jpg',
            'post_id' => 12
        ]);
        Image::create([
            'url' => '2.jpg',
            'post_id' => 12
        ]);
    }
}
