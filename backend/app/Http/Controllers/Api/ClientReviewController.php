<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreClientReviewRequest;
use App\Models\Clientreview;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class ClientReviewController extends Controller
{
    public function index()
    {
        return response()->json(Clientreview::all());
    }

    public function store(StoreClientReviewRequest $request): JsonResponse
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('clientreviews', 'public');
        }
        $review = Clientreview::create($data);
        return response()->json($review, 201);
    }

    public function show(Clientreview $clientreview)
    {
        return response()->json($clientreview);
    }

    public function update(StoreClientReviewRequest $request, Clientreview $clientreview)
    {
        $data = $request->validated();
        if ($request->hasFile('image')) {
            if ($clientreview->image) Storage::disk('public')->delete($clientreview->image);
            $data['image'] = $request->file('image')->store('clientreviews', 'public');
        }
        $clientreview->update($data);
        return response()->json($clientreview);
    }

    public function destroy(Clientreview $clientreview)
    {
        if ($clientreview->image) Storage::disk('public')->delete($clientreview->image);
        $clientreview->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
