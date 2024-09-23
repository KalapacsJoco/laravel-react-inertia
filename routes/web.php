<?php

use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\DoctorsController;
use App\Http\Controllers\DentalJobsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');



Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', fn()=> Inertia::render('Dashboard'))
            ->name('dashboard');

    Route::resource('DentalJobs', DentalJobsController::class);
    Route::resource('Doctors', DoctorsController::class);
    Route::resource('Maintenance', MaintenanceController::class);

});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
