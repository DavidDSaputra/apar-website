<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = [
        'nama',
        'perusahaan',
        'kota',
        'kebutuhan',
        'no_wa',
    ];
}
