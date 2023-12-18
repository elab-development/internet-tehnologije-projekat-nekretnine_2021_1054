<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NekretninaModel extends Model
{
    use HasFactory;

    protected $table = 'Nekretnine';

    protected $fillable = [
        'adresa',
        'grad',
        'vrstaNekretnine',
        'povrsina',
        'brojSoba',
        'slika',
        'cena',
    ];
}
