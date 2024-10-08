<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DentalJobs extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' =>$this->id,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' =>(new Carbon($this->updated_at))->format('Y-m-d'),
            'doctor_id' =>$this->doctor_id,
            'material' =>$this->material,
            'type' =>$this->type,
            'qty' =>$this->qty,
            'deadline' =>$this->deadline,
            'noGuarantee' =>$this->noGuarantee,
            'PatientName' =>$this->PatientName,
            'color' =>$this->color,
            'price' =>$this->price,
        ];
    }
}
