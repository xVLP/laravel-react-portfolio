<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Mail\ContactInquiryReceived;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $messageRecord = ContactMessage::create($validated);

        // Attempt instant email dispatch to Veronica's Gmail
        try {
            Mail::to('veronicapiando.official@gmail.com')->send(new ContactInquiryReceived($messageRecord));
        } catch (\Exception $e) {
            Log::error('Contact Email Dispatch Error: ' . $e->getMessage());
        }

        return back()->with('success', 'Message sent successfully!');
    }
}
