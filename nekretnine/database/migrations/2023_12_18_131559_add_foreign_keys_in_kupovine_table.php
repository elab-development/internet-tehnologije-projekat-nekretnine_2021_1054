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
        Schema::table('kupovine', function (Blueprint $table) {
           $table->foreignId('agent_id')->nullable()->references('id')->on('agenti')->onDelete('set null');
           $table->foreignId('nekretnina_id')->nullable()->references('id')->on('nekretnine')->onDelete('set null');
           $table->foreignId('user_id')->nullable()->references('id')->on('users')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('kupovine', function (Blueprint $table) {
            $table->dropForeign('agent_id');
            $table->dropForeign('nekretnina_id');
            $table->dropForeign('user_id');
        });
    }
};
