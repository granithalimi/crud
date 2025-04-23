<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\User;
use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;

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
        return Inertia::render("CreateGallery");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $name = $request->name;
        $u_id = auth()->id();
        Gallery::create([
            'name' => $name,
            'user_id' => $u_id,
        ]);
        return back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        return Inertia::render('Gallery', [
            'gallery' => Gallery::find($gallery->id),
            'user' => Gallery::where('id', $gallery->id)->first()->user()->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        return Inertia::render("UpdateGallery", [
            'gallery' => Gallery::find($gallery->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
        $gallery->update(['name' => $request->name]);
        return redirect()->route('galleries.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        Gallery::where('id', $gallery->id)->delete();
        return to_route('galleries.index');
    }
}
