<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientReviewRequest extends FormRequest
{
    public function authorize() { return true; }

    public function rules()
    {
        return [
            'client_name' => 'required|string|max:255',
            'msg' => 'required|string',
            'from' => 'nullable|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:5120',
        ];
    }
}
