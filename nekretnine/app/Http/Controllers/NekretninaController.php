<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Nekretnina;
use App\Http\Resources\NekretninaResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class NekretninaController extends Controller
{
    //sve nekretnine
    public function index()
    {
        $nekretnine = Nekretnina::all();
        return NekretninaResource::collection($nekretnine);
    }

    //nekretnina na osnovu id-a
    public function show($id)
    {
        $nekretnina = Nekretnina::findOrFail($id);
        return new NekretninaResource($nekretnina);
    }

    //nova nekretnina
    public function store(Request $request)
    {

    $validator = Validator::make($request->all(), [
        'adresa' => 'required',
        'grad' => 'required',
        'vrstaNekretnine' => 'required',
        'povrsina' => 'required',
        'brojSoba' => 'required',
        //dozvoljeni formati za sliku
        'slika' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'cena' => 'required',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors());
    }
    //generisanje imena slike
    $imeSlike = Str::random(32).".".$request->slika->getClientOriginalExtension();

    $nekretnina = new Nekretnina();
    $nekretnina->adresa = $request->adresa;
    $nekretnina->grad = $request->grad;
    $nekretnina->vrstaNekretnine = $request->vrstaNekretnine;
    $nekretnina->povrsina = $request->povrsina;
    $nekretnina->brojSoba = $request->brojSoba;
    $nekretnina->slika = $imeSlike;
    $nekretnina->cena = $request->cena;

    $nekretnina->save();

    //cuvanje slike u folderu storage
    Storage::disk('public')->put($imeSlike, file_get_contents($request->slika));

    return response()->json(['Uspešno kreirana nova nekretnina!',
         new NekretninaResource($nekretnina)]);
    }

    //azuriranje agenta
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'adresa' => 'required',
            'grad' => 'required',
            'vrstaNekretnine' => 'required',
            'povrsina' => 'required',
            'brojSoba' => 'required',
            //dozvoljeni formati za sliku
            'slika' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'cena' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $nekretnina = Nekretnina::find($id);
        if(!$nekretnina){
          return response()->json([
            'message'=>'Nekretnina nije pronadjena za izmenu.'
          ],404);
        }

        //menjanje unesenih vrednosti
        $nekretnina->adresa = $request->adresa;
        $nekretnina->grad = $request->grad;
        $nekretnina->vrstaNekretnine = $request->vrstaNekretnine;
        $nekretnina->povrsina = $request->povrsina;
        $nekretnina->brojSoba = $request->brojSoba;
        $nekretnina->cena = $request->cena;

        if($request->slika) {
            // Public storage
            $storage = Storage::disk('public');

            // Brisanje stare slike
            if($storage->exists($nekretnina->slika))
                $storage->delete($nekretnina->slika);

            //generisanje imena slike 
            $imeSlike = Str::random(32).".".$request->slika->getClientOriginalExtension();
            $nekretnina->slika = $imeSlike;

            // Image save in public folder
            $storage->put($imeSlike, file_get_contents($request->slika));
        }

        // Update Nekretnina
        $nekretnina->save();

        return response()->json(['Uspešno izmenjena nekretnina', new NekretninaResource($nekretnina)]);
    }

    //brisanje agenta
    public function destroy($id)
    {
         // Detail 
         $nekretnina = Nekretnina::find($id);
         if(!$nekretnina){
           return response()->json([
              'message'=>'Nije pronadjena nekretnina.'
 
           ],404);
         }
 
         // Public storage
         $storage = Storage::disk('public');
 
         // Brisanje slike iz foldera storage
         if($storage->exists($nekretnina->slika))
             $storage->delete($nekretnina->slika);
 
         // Brisanje Nekretnine
         $nekretnina->delete();
 
         // Return Json Response
         return response()->json([
             'message' => "Nekretnina uspešno obrisana."
         ],200);
    }

    //menjanje cene nekretnine
    public function updateCena(Request $request, $id)
{
    $request->validate([
        'cena' => 'required'
    ]);

    $nekretnina = Nekretnina::findOrFail($id);

    $nekretnina->update(['cena' => $request->input('cena')]);

    return response()->json(['message' => 'Cena nekretnine uspešno izmenjenja', new NekretninaResource($nekretnina)]);
}
}
