<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use Illuminate\Http\Request;

class NotesController extends Controller
{
    public function index()
    {
        return response()->json(Notes::all(), 200);
    }

    public function get($id)
    {
        try {
            $note = Notes::findOrFail($id);

            return response()->json($note, 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Nota no encontrada'], 404);
        }
    }

    public function create(Request $request)
    {
        $note = Notes::create([
            'contenido' => $request->contenido
        ]);

        return response()->json($note, 201);
    }

    public function update($id, Request $request)
    {
        try {
            $note = Notes::findOrFail($id);
            $note->contenido = $request->contenido;
            $note->save();

            return response()->json($note, 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Nota no encontrada'], 404);
        }
    }

    public function delete($id)
    {
        try {
            $note = Notes::findOrFail($id)->delete();

            return response()->json(['message' => 'Nota eliminada'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Nota no encontrada'], 404);
        }
    }
}
