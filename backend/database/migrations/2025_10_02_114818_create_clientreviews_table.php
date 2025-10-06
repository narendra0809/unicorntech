<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('clientreviews', function (Blueprint $table) {
            $table->id();
            $table->string('client_name')->nullable();
            $table->text('msg')->nullable();
            $table->string('from')->nullable(); // e.g., company or location
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('clientreviews');
    }
};
