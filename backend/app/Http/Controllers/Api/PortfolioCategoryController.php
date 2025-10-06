<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePortfolioCategoryRequest;
use App\Models\Portfolio_catregory;
use Illuminate\Http\JsonResponse;

class PortfolioCategoryController extends Controller
{
    public function index()
    {
        return response()->json(Portfolio_catregory::all());
    }

    public function store(StorePortfolioCategoryRequest $request): JsonResponse
    {
        $data = $request->validated();
        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['name']);
        }
        $category = Portfolio_catregory::create($data);
        return response()->json($category, 201);
    }

    public function show(Portfolio_catregory $portfolio_catregory)
    {
        return response()->json($portfolio_catregory);
    }

    public function update(StorePortfolioCategoryRequest $request, Portfolio_catregory $portfolio_catregory)
    {
        $data = $request->validated();
        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['name']);
        }
        $portfolio_catregory->update($data);
        return response()->json($portfolio_catregory);
    }

    public function destroy(Portfolio_catregory $portfolio_catregory)
    {
        $portfolio_catregory->delete();
        return response()->json(['message' => 'Deleted']);
    }
}
