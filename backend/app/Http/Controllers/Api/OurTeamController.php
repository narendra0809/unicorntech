<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOurTeamRequest;
use App\Models\Ourteam;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class OurTeamController extends Controller
{
    public function index()
    {
        return response()->json(Ourteam::all());
    }

    public function store(StoreOurTeamRequest $request): JsonResponse
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('ourteam', 'public');
        }
        $member = Ourteam::create($data);
        return response()->json($member, 201);
    }

    public function show(Ourteam $ourteam)
    {
        return response()->json($ourteam);
    }

    public function update(StoreOurTeamRequest $request, Ourteam $ourteam)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            if ($ourteam->image) {
                Storage::disk('public')->delete($ourteam->image);
            }
            $data['image'] = $request->file('image')->store('ourteam', 'public');
        }
        $ourteam->update($data);
        return response()->json($ourteam);
    }

    public function destroy(Ourteam $ourteam)
    {
        if ($ourteam->image) Storage::disk('public')->delete($ourteam->image);
        $ourteam->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
