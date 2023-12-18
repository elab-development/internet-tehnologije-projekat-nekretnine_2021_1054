<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Agent;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\AgentResource;

class AgentController extends Controller
{
    //svi agenti
    public function index()
    {
        $agenti = Agent::all();
        return AgentResource::collection($agenti);
    }

    //agent na osnovu id-a
    public function show(Agent $agent)
    {
        return new AgentResource($agent);
    }

    //nov agent
    public function store(Request $request)
    {
    $validator = Validator::make($request->all(), [
        'imePrezime' => 'required',
        'grad' => 'required',
        'adresa' => 'required',
        'email' => 'required',
        'telefon' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }

    $agent = new Agent();
    $agent->imePrezime = $request->imePrezime;
    $agent->grad = $request->grad;
    $agent->adresa = $request->adresa;
    $agent->email = $request->email;
    $agent->telefon = $request->telefon;

    $agent->save();

    return response()->json(['Uspešno kreiran novi agent!',
         new AgentResource($agent)]);
    }

    //azuriranje agenta
    public function update(Request $request, Agent $agent)
    {
        $validator = Validator::make($request->all(), [
            'imePrezime' => 'required',
            'grad' => 'required',
            'adresa' => 'required',
            'email' => 'required',
            'telefon' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $agent->imePrezime = $request->imePrezime;
        $agent->grad = $request->grad;
        $agent->adresa = $request->adresa;
        $agent->email = $request->email;
        $agent->telefon = $request->telefon;


        $agent->save();

        return response()->json(['Uspešno izmenjen agent!', new AgentResource($agent)]);
    }

    //brisanje agenta
    public function destroy(Agent $agent)
    {
        $agent->delete();
        return response()->json('Uspešno obrisan agent!');
    }
}
