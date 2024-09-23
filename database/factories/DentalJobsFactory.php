<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\dentalJobs>
 */
class DentalJobsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'doctor_id' => DoctorsFactory::new(), // Használja a Doctors factoryt
            'material' => $this->faker->randomElement(['Cirkon', 'PMMA', 'Fém']), // Random anyag
            'type' => $this->faker->randomElement(['Anatómikus', 'Váz']),
            'qty' => $this->faker->numberBetween(1, 32),
            'deadline' => $this->faker->dateTimeBetween('tomorrow', '+3 days'),
            'noGuarantee' => $this->faker->boolean(),
            'PatientName' => $this->faker->name(),
            'color' => $this->faker->randomElement(['A1', 'A2', 'A3', 'A3.5', 'A4', 'B1', 'B2', 'B3', 'C1']),
            'price' => $this->faker->randomFloat(2, 5, 500),
        ];
    }
}
