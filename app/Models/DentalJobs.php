<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DentalJobs extends Model
{
    use HasFactory;

    // Definiáld a kapcsolatot a Doctors modellel
    public function doctor()
    {
        return $this->belongsTo(Doctors::class, 'doctor_id');
    }
}
