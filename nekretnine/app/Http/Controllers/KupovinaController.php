<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kupovina;
use App\Http\Resources\KupovinaResource;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nekretnina_id' => 'required|numeric',
            'user_id' => 'required|numeric',
            'agent_id' => 'required|numeric',
            'nacinPlacanja' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $kupovina = new Kupovina();
        $kupovina->nekretnina_id = $request->nekretnina_id;
        $kupovina->user_id = $request->user_id;
        $kupovina->agent_id = $request->agent_id;
        $kupovina->nacinPlacanja = $request->nacinPlacanja;
        $kupovina->datumKupovine = new \DateTime();
        $kupovina->statusKupovine = 'Na cekanju';
        $kupovina->save();

        return response()->json([
            'uspesno' => true,
            'poruka' => 'Uspesno ste kupili nekretninu',
            'data' => new KupovinaResource($kupovina)
        ]);
    }

    public function kupovineNaCekanju(Request $request)
    {
        $kupovine = Kupovina::where('statusKupovine', 'Na cekanju')->get();
        return response()->json([
            'uspesno' => true,
            'data' => KupovinaResource::collection($kupovine)
        ]);
    }

    public function odobri($id)
    {
        $kupovina = Kupovina::findOrFail($id);

        $kupovina->statusKupovine = "Odobreno";
        $kupovina->save();

        return response()->json([
            'uspesno' => true,
            'poruka' => 'Uspesno ste promenili status kupovine',
            'data' => new KupovinaResource($kupovina)
        ]);
    }

    public function odbij($id)
    {
        $kupovina = Kupovina::findOrFail($id);

        $kupovina->statusKupovine = "Odbijeno";
        $kupovina->save();

        return response()->json([
            'uspesno' => true,
            'poruka' => 'Uspesno ste promenili status kupovine',
            'data' => new KupovinaResource($kupovina)
        ]);
    }

    public function groupNumberOfKupovinaPerAgent(Request $request)
    {
        $grouped = Kupovina::select('agenti.imePrezime', DB::raw('count(*) as total'))
            ->join('agenti', 'kupovine.agent_id', '=', 'agenti.id')
            ->groupBy('agenti.imePrezime')
            ->get();

        return response()->json([
            'uspesno' => true,
            'data' => $grouped
        ]);
    }

    public function getkupovinaDetalji(Request $request)
    {
        $kupovine = DB::table('kupovine')
            ->join('nekretnine', 'kupovine.nekretnina_id', '=', 'nekretnine.id')
            ->join('users', 'kupovine.user_id', '=', 'users.id')
            ->join('agenti', 'kupovine.agent_id', '=', 'agenti.id')
            ->select('kupovine.*', 'nekretnine.adresa', 'nekretnine.grad', 'users.name as kupac', 'agenti.imePrezime as agent')
            ->get();

        return response()->json([
            'uspesno' => true,
            'data' => $kupovine
        ]);
    }

}
