<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AgentResource extends JsonResource
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
            'ime_prezime' => $this->resource->imePrezime,
            'grad' => $this->resource->grad,
            'adresa' => $this->resource->adresa,
            'email' => $this->resource->email,
            'telefon' => $this->resource->telefon
        ];
    }
}
