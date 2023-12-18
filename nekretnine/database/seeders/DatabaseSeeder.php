<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\AgentSeeder;
use Database\Seeders\NekretninaSeeder;
use Database\Seeders\KupovinaSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $AgentSeeder = new AgentSeeder;
        $AgentSeeder->run();

        $NekretninaSeeder = new NekretninaSeeder;
        $NekretninaSeeder->run();

        $KupovinaSeeder = new KupovinaSeeder;
        $KupovinaSeeder->run(); 


    }
}
