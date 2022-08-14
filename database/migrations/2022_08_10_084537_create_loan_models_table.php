<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loan_models', function (Blueprint $table) {
            $table->id();
            $table->string('userID');
            $table->string('employeeName');
            $table->string('companyName');
            $table->integer('withInterest');
            $table->integer('amount');
            $table->integer('monthly');
            $table->integer('amortization');
            $table->integer('companyID');
            $table->string('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loan_models');
    }
};
