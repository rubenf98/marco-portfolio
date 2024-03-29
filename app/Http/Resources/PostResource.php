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
            'date' => Carbon::parse($this->date)->format('Y'),
            'cover' => $this->images->where('cover', true)->first(),
            'images' => $this->images,
            'client' => $this->client,
            'category' => [
                'id' => $this->category->id,
                'name' => $this->category->name,
            ],
            'item' => $this->item
        ];
    }
}
