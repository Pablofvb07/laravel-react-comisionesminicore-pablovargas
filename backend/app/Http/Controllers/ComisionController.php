<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\ComisionService;

class ComisionController extends Controller
{
    public function calcular(Request $request, ComisionService $service)
    {
        // Obtener fechas desde el frontend
        $inicio = $request->fecha_inicio;
        $fin = $request->fecha_fin;

        // Llamar al service (lógica)
        $resultado = $service->calcular($inicio, $fin);

        // Retornar respuesta en JSON
        return response()->json($resultado);
    }
}