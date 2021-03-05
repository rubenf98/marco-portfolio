<?php

namespace App\Http\Resources;

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
            'date' => (string) $this->date,
            'cover' => $this->images->where('cover', true)->first(),
            'images' => $this->images->where('cover', false),
            'item' => [
                'id' => $this->item->id,
                'name' => $this->item->name,
                'category' => [
                    'id' => $this->item->category->id,
                    'name' => $this->item->category->name,
                ]
            ]
        ];
    }
}
