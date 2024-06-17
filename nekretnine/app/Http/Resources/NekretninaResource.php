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
            'id' => $this->resource->id,
            'adresa' => $this->resource->adresa,
            'grad' => $this->resource->grad,
            'vrsta_nekretnine' => $this->resource->vrstaNekretnine,
            'povrsina' => $this->resource->povrsina,
            'broj_soba' => $this->resource->brojSoba,
            'link_slike' => $this->resource->slika,
            'cena' => $this->resource->cena
        ];
    }
}
