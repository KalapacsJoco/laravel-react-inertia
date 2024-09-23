<?php

namespace App\Http\Controllers;

use App\Models\Doctors;
use App\Http\Requests\StoreDoctorsRequest;
use App\Http\Requests\UpdateDoctorsRequest;
use App\Http\Resources\Doctors as ResourcesDoctors;

class DoctorsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        {
            $doctors = Doctors::with('dentalJobs')->paginate(10); // 'dentalJobs' a Doctor modelből
            return inertia("Doctors/Index", ['doctors' => ResourcesDoctors::collection($doctors)]);
            
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDoctorsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Doctors $doctors)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Doctors $doctors)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDoctorsRequest $request, Doctors $doctors)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Doctors $doctors)
    {
        //
    }
}
