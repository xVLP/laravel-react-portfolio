<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard/Projects', [
            'projects' => Project::orderBy('created_at', 'desc')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'nullable|string',
            'live_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'image_url' => 'nullable|url',
        ]);

        if (isset($validated['tech_stack'])) {
            $validated['tech_stack'] = array_map('trim', explode(',', $validated['tech_stack']));
        }

        Project::create($validated);

        return back()->with('success', 'Project created!');
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'required|string',
            'tech_stack' => 'nullable',
            'live_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'image_url' => 'nullable|url',
        ]);

        if (isset($validated['tech_stack']) && is_string($validated['tech_stack'])) {
            $validated['tech_stack'] = array_map('trim', explode(',', $validated['tech_stack']));
        }

        $project->update($validated);

        return back()->with('success', 'Project updated!');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();
        return back()->with('success', 'Project deleted!');
    }
}
