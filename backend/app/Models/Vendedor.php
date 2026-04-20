<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Venta;

class Vendedor extends Model
{
    protected $fillable = [
    'nombre',
    'email'
];
    public function ventas () 
{
    return $this->hasMany(Venta::class);
} 
}

