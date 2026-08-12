<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class MessageController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Messages', [
            'messages' => ContactMessage::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function toggleRead(ContactMessage $message): RedirectResponse
    {
        $message->update(['is_read' => !$message->is_read]);
        return back();
    }

    public function destroy(ContactMessage $message): RedirectResponse
    {
        $message->delete();
        return back()->with('success', 'Message deleted!');
    }
}
