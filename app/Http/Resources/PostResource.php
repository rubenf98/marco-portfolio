<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'date' => Carbon::parse($this->date)->format('l jS \\of F Y'),
            'cover' => $this->images->where('cover', true)->first(),
            'images' => $this->images->where('cover', false),
            'client' => $this->client,
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'item' => $this->item
        ];
    }
}
