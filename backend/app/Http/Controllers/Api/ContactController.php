<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function store(ContactRequest $request): JsonResponse
    {
        // validated data
        $data = $request->validated();

        // save to DB
        $contact = Contact::create($data);

        // optional: you can dispatch email/job here

        return response()->json([
            'success' => true,
            'message' => 'Contact saved successfully.',
            'data'    => $contact
        ], 201);
    }
}
