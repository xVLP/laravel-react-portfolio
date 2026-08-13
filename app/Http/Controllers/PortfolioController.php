<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Welcome', [
            'projects' => Project::where('featured', true)->orderBy('order')->get(),
            'skills' => Skill::all(),
            'experiences' => Experience::orderBy('order')->get(),
        ]);
    }

    public function downloadCv()
    {
        return view('cv');
    }
}
