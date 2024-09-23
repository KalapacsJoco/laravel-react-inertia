<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctors extends Model
{
    use HasFactory;

    public function dentalJobs()
    {
        return $this->hasMany(DentalJobs::class, 'doctor_id');
    }
}
