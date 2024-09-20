<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\DentalJobs;
use App\Models\Doctors;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Létrehoz 10 doktort
        $doctors = Doctors::factory()->count(10)->create(); 

        // User::factory()->create([
        //     'name' => 'zsolt',
        //     'email' => 'zsolt@gmail.com',
        //     'password' => '(123.321A)',
        //     'email_verified_at' => now(),
        // ]);

        // Létrehoz 30 DentalJob rekordot, mindegyikhez véletlenszerű doktort rendel
        DentalJobs::factory()->count(30)->create()->each(function ($dentalJob) use ($doctors) {
            $dentalJob->doctor_id = $doctors->random()->id; // Véletlenszerű orvos hozzárendelése
            $dentalJob->save(); // Mentjük a módosítást
        });
    }
}

