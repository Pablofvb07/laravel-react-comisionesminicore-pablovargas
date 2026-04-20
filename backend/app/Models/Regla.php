<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Regla extends Model
{
    protected $fillable = [
    'monto_min',
    'monto_max',
    'porcentaje_comision'
];
}
