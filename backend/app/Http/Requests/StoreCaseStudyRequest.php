<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCaseStudyRequest extends FormRequest
{
    public function authorize() { return true; }

    public function rules()
    {
        return [
            'portfolio_id' => 'required|exists:portfolios,id',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:5120',
            'platform' => 'nullable|string|max:255',
            'services' => 'nullable|string|max:255',
            'industry' => 'nullable|string|max:255',
            'timeline' => 'nullable|string|max:255',
            'techstack' => 'nullable|array',
            'techstack.*' => 'string|max:255',
            'project_overview' => 'nullable|string',
            'challenges' => 'nullable|string',
            'solution' => 'nullable|string',
            'about' => 'nullable|string',
        ];
    }
}
