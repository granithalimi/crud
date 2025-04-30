<?php

namespace App\Http\Controllers;

use App\Models\Picture;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PictureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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

        $request->validate([
            'pic' => 'required|image|',
        ]);

        if($request->hasFile('pic')){
            $path = $request->pic->store("pic", 'public');

            Picture::create([
                'name' => $request->name,
                'gallery_id' => $request->id,
                'path' => $path,
            ]);

            return redirect()->route('galleries.index');
        }

        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Picture $picture)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Picture $picture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Picture $picture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Picture $picture)
    {
        Picture::where('id', $picture->id)->delete();
        return redirect()->route('galleries.index');
    }
}
