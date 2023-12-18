<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentModel extends Model
{
    use HasFactory;

    
    protected $table = 'Agenti';

    protected $fillable = [
        'imePrezime',
        'grad',
        'adresa',
        'email',
        'telefon',
    ];
}
