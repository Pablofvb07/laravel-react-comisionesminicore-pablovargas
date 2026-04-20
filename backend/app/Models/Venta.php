<?php

namespace App\Models;
use App\Models\Vendedor;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    protected $fillable = [
    'vendedor_id',
    'monto',
    'fecha'
];
    public function vendedor() {
    return $this->belongsTo(Vendedor::class);
}
}
