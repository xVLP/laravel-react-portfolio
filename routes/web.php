<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Models\Project;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Public Portfolio Route
Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Guest Authentication Routes
Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store']);
});

// Admin Protected Routes
Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard/Index', [
            'projectCount' => Project::count(),
            'messageCount' => ContactMessage::count(),
            'unreadCount' => ContactMessage::where('is_read', false)->count(),
        ]);
    })->name('dashboard');

    // Admin Projects Management
    Route::get('/dashboard/projects', [ProjectController::class, 'index'])->name('admin.projects.index');
    Route::post('/dashboard/projects', [ProjectController::class, 'store'])->name('admin.projects.store');
    Route::put('/dashboard/projects/{project}', [ProjectController::class, 'update'])->name('admin.projects.update');
    Route::delete('/dashboard/projects/{project}', [ProjectController::class, 'destroy'])->name('admin.projects.destroy');

    // Admin Contact Messages Management
    Route::get('/dashboard/messages', [MessageController::class, 'index'])->name('admin.messages.index');
    Route::patch('/dashboard/messages/{message}/toggle-read', [MessageController::class, 'toggleRead'])->name('admin.messages.toggleRead');
    Route::delete('/dashboard/messages/{message}', [MessageController::class, 'destroy'])->name('admin.messages.destroy');
});
