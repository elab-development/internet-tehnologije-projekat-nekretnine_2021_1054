<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KupovinaModel extends Model
{
    use HasFactory;

    protected $table = 'Kupovine';

    protected $fillable = [
        'datumKupovine',
        'nacinPlacanja',
        'agent_id',
        'nekretnina_id',
        'user_id',
    ];


    
    public function agent()
    {
        return $this->belongsTo(AgentModel::class);
    }

    public function nekretnina()
    {
        return $this->belongsTo(NekretninaModel::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
