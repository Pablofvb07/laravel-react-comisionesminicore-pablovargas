<?php

namespace App\Services;

use App\Models\Venta;
use App\Models\Regla;

class ComisionService
{
    public function calcular($inicio = null, $fin = null)
    {
        // 🔹 1. Query base
        $ventas = Venta::query();

        // 🔹 2. Filtro opcional por fechas
        if ($inicio && $fin) {
            $ventas->whereBetween('fecha', [$inicio, $fin]);
        }

        // 🔹 3. Traer datos con relación
        $ventas = $ventas->with('vendedor')
            ->get()
            ->groupBy('vendedor_id');

        $resultado = [];

        // 🔹 4. Recorrer vendedores
        foreach ($ventas as $grupoVentas) {

            $vendedor = $grupoVentas->first()?->vendedor;

            // 🛡️ seguridad por si no existe
            if (!$vendedor) continue;

            // 🔹 5. Total de ventas
            $total = $grupoVentas->sum('monto');

            // 🔹 6. Regla aplicable
            $regla = Regla::where('monto_min', '<=', $total)
                ->where('monto_max', '>=', $total)
                ->first();

            // 🔹 7. Comisión segura
            $porcentaje = $regla?->porcentaje_comision ?? 0;
            $comision = $total * ($porcentaje / 100);

            // 🔹 8. Resultado limpio
            $resultado[] = [
                'vendedor' => $vendedor->nombre,
                'total' => $total,
                'porcentaje' => $porcentaje,
                'comision' => round($comision, 2)
            ];
        }

        return $resultado;
    }
}