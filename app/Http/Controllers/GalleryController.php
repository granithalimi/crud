<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
        return Inertia::render('Galleries', [
            'galleries' => Gallery::with('user')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return Inertia::render('Gallery', [
            'gallery' => Gallery::find($gallery),
            'user' => Gallery::where('id', $gallery->id)->first()->user()->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
