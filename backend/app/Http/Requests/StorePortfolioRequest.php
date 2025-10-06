<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePortfolioRequest extends FormRequest
{
    public function authorize() { return true; }

    public function rules()
    {
        $portfolioId = $this->route('portfolio') ? $this->route('portfolio')->id ?? null : null;

        return [
            'portfolio_catregory_id' => 'required|exists:portfolio_catregories,id',
            'name' => 'required|string|max:255',
            'slug' => 'nullable|string|max:255|unique:portfolios,slug,'.$portfolioId,
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
            'description' => 'nullable|string',
        ];
    }
}
