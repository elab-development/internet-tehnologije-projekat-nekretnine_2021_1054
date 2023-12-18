<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class KupovinaResource extends JsonResource
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
            'Datum kupovine -> ' => $this->resource->datumKupovine,
            'Nacin placanja -> ' => $this->resource->nacinPlacanja,
            'Status kupovine-> ' => $this->resource->statusKupovine,
            'Agent koji je zaduzen za kupovinu -> ' => new AgentResource($this->resource->agent),
            'Kupljena nekretnina-> ' => new NekretninaResource($this->resource->nekretnina),
            'Korisnik koji kupuje nekretninu-> ' => new UserResource($this->resource->user),
        ];
    }
}
