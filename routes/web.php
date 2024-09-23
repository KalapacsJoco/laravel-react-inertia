<?php

use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\DoctorsController;
use App\Http\Controllers\DentalJobsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))
        ->name('dashboard');

    Route::resource('DentalJobs', DentalJobsController::class);
    Route::resource('Doctors', DoctorsController::class);
});

// Maintenance route-ok
Route::get('/Maintenance', [MaintenanceController::class, 'index'])->name('maintenance.index');
Route::post('/Maintenance/store', [MaintenanceController::class, 'store'])->name('maintenance.store');
Route::get('/Maintenance/{id}', [MaintenanceController::class, 'show'])->name('maintenance.show');
Route::put('/Maintenance/{id}', [MaintenanceController::class, 'update'])->name('maintenance.update');
Route::delete('/Maintenance/{id}', [MaintenanceController::class, 'destroy'])->name('maintenance.destroy');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
