<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('casestudies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('portfolio_id')->constrained('portfolios')->onDelete('cascade');
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('title');
            $table->text('description')->nullable();
            // store multiple images as JSON array of paths
            $table->json('images')->nullable();
            $table->string('platform')->nullable();
            $table->string('services')->nullable();
            $table->string('industry')->nullable();
            $table->string('timeline')->nullable();
            $table->json('techstack')->nullable(); // json array
            $table->text('project_overview')->nullable();
            $table->text('challenges')->nullable();
            $table->text('solution')->nullable();
            // about (extra)
            $table->text('about')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('casestudies');
    }
};
