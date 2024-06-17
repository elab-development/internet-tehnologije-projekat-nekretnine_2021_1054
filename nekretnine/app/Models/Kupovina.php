<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kupovina extends Model
{
    use HasFactory;

    protected $table = 'kupovine';

    protected $fillable = [
        'datumKupovine',
        'nacinPlacanja',
        'agent_id',
        'nekretnina_id',
        'user_id',
        'statusKupovine'
    ];



    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    public function nekretnina()
    {
        return $this->belongsTo(Nekretnina::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
