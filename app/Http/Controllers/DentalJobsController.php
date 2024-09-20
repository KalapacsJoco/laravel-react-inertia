<?php

namespace App\Http\Controllers;

use App\Models\DentalJobs;
use App\Http\Requests\StoreDentalJobsRequest;
use App\Http\Requests\UpdateDentalJobsRequest;
use App\Http\Resources\DentalJobs as ResourcesDentalJobs;

class DentalJobsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dentalJobs = DentalJobs::with('doctor')->paginate(10);
        return inertia("DentalJobs/Index", ['dentalJobs' => ResourcesDentalJobs::collection($dentalJobs)]);
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
    public function store(StoreDentalJobsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(DentalJobs $dentalJobs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(DentalJobs $dentalJobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDentalJobsRequest $request, DentalJobs $dentalJobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(DentalJobs $dentalJobs)
    {
        //
    }
}
