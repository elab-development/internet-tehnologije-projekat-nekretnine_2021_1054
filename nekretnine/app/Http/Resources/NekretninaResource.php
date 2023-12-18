<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NekretninaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'ID -> ' => $this->resource->id,
            'Adresa-> ' => $this->resource->adresa,
            'Grad -> ' => $this->resource->grad,
            'Vrsta nekretnine -> ' => $this->resource->vrstaNekretnine,
            'Povrsina u m2-> ' => $this->resource->povrsina,
            'Broj soba nekretnine -> ' => $this->resource->brojSoba,
            'Link slike -> ' => $this->resource->slika,
            'Cena izrazena u evrima-> ' => $this->resource->cena
        ];
    }
}
