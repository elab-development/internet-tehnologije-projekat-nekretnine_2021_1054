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
            'id' => $this->resource->id,
            'datum_kupovine' => $this->resource->datumKupovine,
            'nacin_placanja' => $this->resource->nacinPlacanja,
            'status_kupovine' => $this->resource->statusKupovine,
            'agent' => new AgentResource($this->resource->agent),
            'nekretnina' => new NekretninaResource($this->resource->nekretnina),
            'korisnik' => new UserResource($this->resource->user),
        ];
    }
}
