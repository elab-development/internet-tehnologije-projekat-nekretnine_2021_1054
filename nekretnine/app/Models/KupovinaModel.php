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
    ];
}
