<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'category',
        'description',
        'tech_stack',
        'highlights',
        'image_url',
        'live_url',
        'github_url',
        'featured',
        'order',
    ];

    protected $casts = [
        'tech_stack' => 'array',
        'highlights' => 'array',
        'featured' => 'boolean',
    ];
}
