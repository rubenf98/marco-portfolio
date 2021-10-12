<?php

namespace Database\Seeders;

use App\Client;
use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Client::create([
            'name' => 'particular',
        ]);
        Client::create([
            'name' => 'Lojas Moleiro',
        ]);
        Client::create([
            'name' => 'Hotel Vila Gale',
        ]);
        Client::create([
            'name' => 'Pestana Royal All Inclusive',
        ]);
        Client::create([
            'name' => 'Loja adamante',
        ]);
    }
}
