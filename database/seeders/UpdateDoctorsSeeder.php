<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Doctors;

class UpdateDoctorsSeeder extends Seeder
{
    /**
     * Run the database seeds.S
     */
    public function run()
    {
        // Loop through each existing doctor and update with random data
        Doctors::all()->each(function ($doctor) {
            $doctor->update([
                'phone' => fake()->phoneNumber,    // Random phone number
                'comment' => fake()->sentence,     // Random comment
            ]);
        });
    }
}
