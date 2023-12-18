<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kupovina;
use App\Http\Resources\KupovinaResource;

class KupovinaController extends Controller
{
    public function index()
    {
        $kupovine = Kupovina::all();
        return KupovinaResource::collection($kupovine);
    }

    
    public function show($id)
    {
        $kupovina = Kupovina::findOrFail($id);
        return new KupovinaResource($kupovina);
    }


}
