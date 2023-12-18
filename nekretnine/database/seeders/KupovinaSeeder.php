<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Kupovina;
use App\Models\Agent;
use App\Models\Nekretnina;

class KupovinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $agent1 = Agent::factory()->create();
        $agent2 = Agent::factory()->create();

        $nekretnina1 = Nekretnina::factory()->create();
        $nekretnina2 = Nekretnina::factory()->create();

        Kupovina::factory(3)->create([
            'agent_id'=>$agent1->id,
            'nekretnina_id'=>$nekretnina1->id
           ]);

           Kupovina::factory(2)->create([
            'agent_id'=>$agent1->id,
            'nekretnina_id'=>$nekretnina2->id
           ]);
    }
}
