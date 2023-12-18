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
            'ID -> ' => $this->resource->id,
            'Ime prezime agenta-> ' => $this->resource->imePrezime,
            'Grad iz koga je agent -> ' => $this->resource->grad,
            'Adresa agenta -> ' => $this->resource->adresa,
            'Email-> ' => $this->resource->email,
            'Telefon -> ' => $this->resource->telefon
        ];
    }
}
