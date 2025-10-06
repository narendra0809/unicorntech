<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePortfolioRequest;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json(Portfolio::with('category')->get());
    }

    public function store(StorePortfolioRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('portfolios', 'public');
        }

        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['name']);
        }

        $portfolio = Portfolio::create($data);
        return response()->json($portfolio, 201);
    }

    public function show(Portfolio $portfolio)
    {
        return response()->json($portfolio->load('category', 'casestudies'));
    }

    public function update(StorePortfolioRequest $request, Portfolio $portfolio)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            // delete old image
            if ($portfolio->image) {
                Storage::disk('public')->delete($portfolio->image);
            }
            $data['image'] = $request->file('image')->store('portfolios', 'public');
        }

        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['name']);
        }

        $portfolio->update($data);
        return response()->json($portfolio);
    }

    public function destroy(Portfolio $portfolio)
    {
        if ($portfolio->image) {
            Storage::disk('public')->delete($portfolio->image);
        }
        $portfolio->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
