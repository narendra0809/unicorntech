<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCaseStudyRequest;
use App\Models\Casestudy;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class CaseStudyController extends Controller
{
    public function index()
    {
        return response()->json(Casestudy::with('portfolio')->get());
    }

    public function store(StoreCaseStudyRequest $request): JsonResponse
    {
        $data = $request->validated();

        // handle images array
        $paths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $img) {
                $paths[] = $img->store('casestudies', 'public');
            }
        }
        $data['images'] = $paths;
        // techstack may come as array; ensure stored as array (casts handle it)
        $casestudy = Casestudy::create($data);
        return response()->json($casestudy->load('portfolio'), 201);
    }

    public function show(Casestudy $casestudy)
    {
        return response()->json($casestudy->load('portfolio'));
    }

    public function update(StoreCaseStudyRequest $request, Casestudy $casestudy)
    {
        $data = $request->validated();

        // if new images uploaded, append them (or replace based on your need)
        $existing = $casestudy->images ?? [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $img) {
                $existing[] = $img->store('casestudies', 'public');
            }
            $data['images'] = $existing;
        }

        $casestudy->update($data);
        return response()->json($casestudy->fresh()->load('portfolio'));
    }

    public function destroy(Casestudy $casestudy)
    {
        // delete stored images
        if (is_array($casestudy->images)) {
            foreach ($casestudy->images as $path) {
                Storage::disk('public')->delete($path);
            }
        }
        $casestudy->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
