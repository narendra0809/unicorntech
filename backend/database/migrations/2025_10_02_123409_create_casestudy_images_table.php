<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('casestudy_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('casestudy_id');
            $table->string('image'); // path/filename
            $table->string('alt')->nullable();
            $table->timestamps();

            $table->foreign('casestudy_id')
                  ->references('id')->on('casestudies')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('casestudy_images');
    }
};
