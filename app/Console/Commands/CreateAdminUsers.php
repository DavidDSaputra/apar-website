<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CreateAdminUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:create-admin-users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create default admin and super admin users';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $users = [
            [
                'nama_lengkap' => 'Super Admin',
                'email' => 'superadmin@example.com',
                'password' => Hash::make('password'),
                'role' => 'super_admin',
            ],
            [
                'nama_lengkap' => 'Admin',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        ];

        foreach ($users as $userData) {
            User::updateOrCreate(['email' => $userData['email']], $userData);
            $this->info("User {$userData['email']} created/updated.");
        }

        return 0;
    }
}
