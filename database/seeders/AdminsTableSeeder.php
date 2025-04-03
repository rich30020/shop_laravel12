<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = Hash::make('123456');
        $admin = new Admin;
        $admin->name = 'Riccardo Mestre';
        $admin->role = 'admin';
        $admin->mobile = '3339881482';
        $admin->email = 'riccardomestre17@gmail.com';
        $admin->password = $password;
        $admin->status = 1;
        $admin->save();
    }
}
