<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Agent;
use App\Models\Nekretnina;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kupovina>
 */
class KupovinaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'datumKupovine' => $this->faker->date(),
            'nacinPlacanja' => $this->faker->randomElement($array = array('Kredit','Gotovina','Platna kartica')),
            'agent_id' => Agent::factory(),
            'nekretnina_id' => Nekretnina::factory(),
            'user_id' => User::factory(),
            'statusKupovine' => $this->faker->randomElement($array = array('U toku','Zakljucena kupovina','Otkazana kupovina',
             'Na cekanju', 'Ponovo otvorena kupovina', 'Odobrena')),
        ];
    }
}
