<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Nekretnina;
use App\Http\Resources\NekretninaResource;

class SearchController extends Controller
{
    public function searchNekretnine(Request $request)
    {
        $query = Nekretnina::query();

        //Pretrazuje se po vrstiNekretnine
        if ($request->has('vrstaNekretnine')) {
            $query->where('vrstaNekretnine', 'like', '%' . $request->input('vrstaNekretnine') . '%');
        }

        //Paginacija samo nekretnina koje zadovoljavaju uslov vrsteNekretnine
        $page = $request->input('page', 1);
        $perPage = 3;

        $nekretnine = $query->orderBy('vrstaNekretnine')->paginate($perPage, ['*'], 'page', $page);

        if($nekretnine->isEmpty()){
            return response()->json(['message' => 'Nekretnine nisu pronadjene'], 404);
        }
        return response()->json(['Trenutna strana' => $nekretnine->currentPage(), 'Poslednja strana' => $nekretnine->lastPage(),
         'Pronadjene nekretnine' => NekretninaResource::collection($nekretnine)], 200);
    }
}
