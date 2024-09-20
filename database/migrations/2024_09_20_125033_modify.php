<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('dental_jobs', function (Blueprint $table) {
            $table->foreignId('doctor_id')->references('id')->on('doctors');
            $table->string('material');
            $table->string('type');
            $table->integer('qty');
            $table->date('deadline');
            $table->boolean('noGuarantee')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('dental_jobs', function (Blueprint $table) {
            //
        });
    }
};
